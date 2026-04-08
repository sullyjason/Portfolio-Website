document.addEventListener('DOMContentLoaded', () => {
    // Only run this logic if we are on the project page
    if (!document.getElementById('project-container')) return;

    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (!projectId) {
        showError("No project ID specified.");
        return;
    }

    const project = projectsData.find(p => p.id === projectId);

    if (!project) {
        showError("Project not found.");
        return;
    }

    renderProject(project);
    setupProjectLightbox();

    // Trigger Prism syntax highlighting
    if (window.Prism) {
        Prism.highlightAll();
    }
});

function showError(message) {
    const container = document.getElementById('project-container');
    container.innerHTML = `
        <div class="text-center py-20">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Oops!</h2>
            <p class="text-gray-500">${message}</p>
            <a href="index.html" class="mt-8 inline-block px-4 py-2 bg-indigo-50 border border-indigo-200 rounded-md text-sm font-semibold text-indigo-700 hover:bg-indigo-100 transition-colors">Return to Portfolio</a>
        </div>
    `;
}

function renderProject(project) {
    const container = document.getElementById('project-container');

    const companyHtml = project.company
        ? `<div class="flex items-center gap-3">
             <div class="flex items-center justify-center w-10 h-10 bg-white border border-gray-200 shadow-sm rounded-md">
                 <!-- Generic building/company icon as placeholder for logo -->
                 <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
             </div>
             <span class="text-base font-bold text-gray-700">${project.company}</span>
           </div>`
        : `<div></div>`;

    // Filter out Silvan Jason Roth from collaborators
    const collaborators = (project.collaborators || []).filter(c => c.name !== "Silvan Jason Roth");

    const collaboratorsHtml = collaborators.map(c => {
        const isLinked = !!c.link;
        const baseClasses = "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-semibold transition-colors";
        const themeClasses = isLinked
            ? "border-blue-400 text-blue-500 hover:bg-blue-50"
            : "border-gray-200 text-gray-400";

        const content = `<span>${c.name}</span>`;

        return isLinked
            ? `<a href="${c.link}" target="_blank" rel="noopener noreferrer" class="${baseClasses} ${themeClasses}">${content}</a>`
            : `<div class="${baseClasses} ${themeClasses}">${content}</div>`;
    }).join('');

    const linksHtml = (project.links || []).map(l => {
        return `<a href="${l.url}" target="_blank" rel="noopener noreferrer" style="color: #2563eb !important; text-decoration: none !important;" class="inline-flex items-center gap-[0.4375rem] transition-all group whitespace-nowrap text-base mr-8">
            <span>${l.label}</span>
            <svg class="w-4 h-4 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
        </a>`;
    }).join('');

    // Pre-calculate sub-sections to check if we should show the grid
    const hasCollaborators = collaborators.length > 0;
    const hasLinks = (project.links || []).length > 0;
    const hasSkills = project.skills && project.skills.length > 0;

    container.innerHTML = `
        <article class="prose prose-slate max-w-none">
            <header class="mb-12">
                <div class="flex items-center justify-between mb-6">
                    ${companyHtml}
                    <div class="flex items-center gap-4 text-sm font-semibold text-gray-500">
                        <span>${project.date}</span>
                        <span class="text-gray-300">|</span>
                        <span>${project.type}</span>
                    </div>
                </div>

                <h1 class="text-4xl sm:text-5xl font-bold text-black tracking-tight leading-tight mb-8">
                    ${project.title}
                </h1>

                ${(hasCollaborators || hasLinks) ? `
                <div class="not-prose border-t border-gray-200 pt-8 mt-8 mb-12 flex flex-col gap-8">
                    ${hasCollaborators ? `
                    <div class="space-y-4 text-left">
                        <h3 class="text-sm font-semibold text-gray-500 tracking-wider">Collaborators</h3>
                        <div class="flex flex-wrap gap-3">
                            ${collaboratorsHtml}
                        </div>
                    </div>
                    ` : ''}

                    ${hasLinks ? `
                    <div class="space-y-4 text-left">
                        <h3 class="text-sm font-semibold text-gray-500 tracking-wider">Links</h3>
                        <div class="flex flex-wrap gap-x-16 gap-y-4">
                            ${linksHtml}
                        </div>
                    </div>
                    ` : ''}
                </div>
                ` : ''}
            </header>

            <div class="project-story text-gray-800 leading-loose space-y-6 mb-12">
                ${project.story || '<p class="text-gray-500 italic">Detailed description coming soon.</p>'}
            </div>

            ${hasSkills ? `
            <footer class="border-t border-gray-200 pt-8 mt-12 pb-12">
                <div class="space-y-4">
                    <h3 class="text-sm font-semibold text-gray-500">Skills & Attributes</h3>
                    <div class="flex flex-wrap gap-2">
                        ${project.skills.map(skill => `<span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-100 border border-gray-200">${skill}</span>`).join('')}
                    </div>
                </div>
            </footer>
            ` : ''}
        </article>
    `;
}

// Function to handle attaching lightbox interactively to images loaded via the story HTML
function setupProjectLightbox() {
    const storyImages = document.querySelectorAll('.project-story img');

    storyImages.forEach(img => {
        // Apply some styling to make them look clickable
        img.classList.add('rounded-xl', 'shadow-sm', 'cursor-pointer', 'hover:opacity-90', 'transition-opacity', 'w-full', 'my-8');

        img.addEventListener('click', () => {
            // Re-using the openLightbox function from main.js!
            if (typeof openLightbox === 'function') {
                openLightbox(img.src, img.alt || 'Project image');
            }
        });
    });
}
