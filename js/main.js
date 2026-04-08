// Custom Logic for Silvan's Portfolio

document.addEventListener('DOMContentLoaded', () => {
    renderPortfolioGrid();
    setupLightbox();
});

const monthMap = {
    Jan: 0, January: 0,
    Feb: 1, February: 1,
    Mar: 2, March: 2,
    Apr: 3, April: 3,
    May: 4,
    Jun: 5, June: 5,
    Jul: 6, July: 6,
    Aug: 7, August: 7,
    Sep: 8, September: 8,
    Oct: 9, October: 9,
    Nov: 10, November: 10,
    Dec: 11, December: 11,
};

function parseProjectEndDate(dateString) {
    if (!dateString || typeof dateString !== 'string') return new Date(0);
    const parts = dateString.split('-').map(part => part.trim()).filter(Boolean);
    const lastPart = parts[parts.length - 1];
    const [monthToken, yearToken] = lastPart.split(' ').filter(Boolean);
    const month = monthMap[monthToken];
    const year = parseInt(yearToken, 10);
    if (month === undefined || Number.isNaN(year)) return new Date(0);
    return new Date(year, month, 1);
}

function sortProjectsByDate(projects) {
    return [...projects].sort((a, b) => parseProjectEndDate(b.date) - parseProjectEndDate(a.date));
}

function renderPortfolioGrid() {
    const gridEl = document.getElementById('portfolio-grid');
    if (!gridEl) return;

    let html = '';
    const sortedProjects = sortProjectsByDate(projectsData);

    sortedProjects.forEach(project => {
        // Only show published projects on the main grid
        if (project.status !== 'published') return;
        // Determine click behavior: navigate to project page if story exists, otherwise open lightbox
        const hasStory = project.story && project.story.length > 0;
        const clickAction = hasStory
            ? `window.location.href='project.html?id=${project.id}'`
            : `openLightbox('${project.thumbnailUrl.replace(/'/g, "\\'")}'  , '${project.title.replace(/'/g, "\\'")}')`;

        // Different icon for navigation vs lightbox
        const overlayIcon = hasStory
            ? `<svg class="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>`
            : `<svg class="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>`;

        const companyHtml = project.company
            ? `<div class="relative flex items-center text-xs font-medium text-gray-400 mb-1">
                 <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                 ${project.company}
               </div>`
            : `<div class="relative flex items-center h-4 mb-1"></div>`;

        html += `
        <div class="portfolio-item hover:scale-[1.01] transition-transform duration-300">
            <div class="w-full bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden cursor-pointer" onclick="${clickAction}">
                <div class="relative block h-72 sm:h-72 w-full overflow-hidden border-b border-gray-100 group">
                    <img 
                        src="${project.thumbnailUrl}" 
                        alt="${project.title}" 
                        class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy" 
                    />
                    <!-- Overlay hint -->
                    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div class="bg-white/90 backdrop-blur rounded-full p-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg text-gray-800">
                            ${overlayIcon}
                        </div>
                    </div>
                </div>
                
                <div class="px-5 py-4">
                    ${companyHtml}
                    <div class="h-[130px] text-left">
                        <h2 class="text-base font-semibold text-gray-700 line-clamp-2 mt-2 mb-4">
                            ${project.title}
                        </h2>
                        <div class="text-sm text-gray-500 line-clamp-3 mb-3 h-16 overflow-hidden text-ellipsis leading-relaxed">
                            ${project.description}
                        </div>
                    </div>
                    
                    <div class="flex justify-between items-center border-t border-gray-100 pt-3 mt-1 text-xs">
                        <div class="text-gray-500">${project.type}</div>
                        <div class="text-gray-400 font-medium">
                            <div class="text-xs text-gray-500"><time>${project.date}</time></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    });

    gridEl.innerHTML = html;
}

/* Lightbox Implementation with basic CSS Transform zooming */

let scale = 1;
let translateX = 0;
let translateY = 0;
let isDragging = false;
let startX, startY;

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('lightbox-close');

function openLightbox(imgSrc, altText) {
    if (!lightbox || !lightboxImg) return;

    // Reset transform
    scale = 1;
    translateX = 0;
    translateY = 0;
    updateTransform();

    lightboxImg.src = imgSrc;
    lightboxImg.alt = altText || 'Expanded Image';

    // Show overlay
    lightbox.classList.remove('opacity-0', 'pointer-events-none');
    lightbox.classList.add('opacity-100', 'is-active');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
}

function closeLightbox() {
    if (!lightbox) return;

    lightbox.classList.remove('opacity-100', 'is-active');
    lightbox.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
}

function updateTransform() {
    // Clamp scale to prevent too much zooming out or extreme zooming in
    scale = Math.max(0.5, Math.min(scale, 5));

    lightboxImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;

    // Adjust cursor based on state
    if (scale > 1) {
        lightboxImg.style.cursor = isDragging ? 'grabbing' : 'grab';
    } else {
        lightboxImg.style.cursor = 'default';
        // Reset translation if not zoomed in
        translateX = 0;
        translateY = 0;
        lightboxImg.style.transform = `translate(0px, 0px) scale(${scale})`;
    }
}

function setupLightbox() {
    if (!lightbox || !lightboxImg || !closeBtn) return;

    // Close events
    closeBtn.addEventListener('click', closeLightbox);

    // Click outside image to close
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.id === 'lightbox-zoom-container') {
            closeLightbox();
        }
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });

    // Zooming via Wheel
    lightbox.addEventListener('wheel', (e) => {
        e.preventDefault(); // Prevent standard page scroll

        const zoomIntensity = 0.1;
        const delta = e.deltaY > 0 ? -1 : 1; // Scroll up -> zoom in, scroll down -> zoom out
        scale += delta * zoomIntensity;

        updateTransform();
    }, { passive: false });

    // Panning dragging logic
    lightboxImg.addEventListener('mousedown', (e) => {
        if (scale > 1) {
            isDragging = true;
            startX = e.clientX - translateX;
            startY = e.clientY - translateY;
            lightboxImg.style.cursor = 'grabbing';
            e.preventDefault(); // Prevent default image drag
        }
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging || scale <= 1) return;

        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        updateTransform();
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
        if (scale > 1) lightboxImg.style.cursor = 'grab';
    });
}
