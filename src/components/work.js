export function Work() {
    const projects = [
        {
            id: 1,
            year: "2025",
            client: "Keychron",
            name: "Creator Micro 2",
            categories: ["Hardware", "Product Design"],
            description: "The Creator Micro is everything you asked for. Wireless, playfully tactile, and just as capable as you.",
            image: "/images/project-1.png",
            featured: true,
            colorClass: "yellow"
        },
        {
            id: 2,
            year: "2024",
            client: "Nexus Corp",
            name: "Nexus Identity",
            categories: ["Branding", "Strategy"],
            description: "Complete brand identity including logo, typography, and visual guidelines.",
            image: "/images/project-2.png",
            layout: "info-first", // Info on left, image on right (or standard grid placement)
            colorClass: "blue",
            textColor: "white"
        },
        {
            id: 3,
            year: "2024",
            client: "K-Studio",
            name: "K.Studio Website",
            categories: ["Website", "UI/UX"],
            description: "Evoking the look of both classic and modern technology for an architectural firm.",
            image: "/images/project-3.png",
            layout: "info-first",
            colorClass: "orange",
            textColor: "black"
        }
    ];

    return `
    <section class="work-section">
        <div class="work-header">
            <span class="work-label">● Our Work</span>
            <h2 class="work-title">Take a look at our projects</h2>
        </div>

        <div class="work-grid">
            <!-- Featured Project Card (Full Width) -->
            <div class="work-card featured-project">
                <div class="featured-left">
                    <div class="work-image-container">
                        <img src="${projects[0].image}" alt="${projects[0].name}" class="project-image">
                    </div>
                </div>
                <div class="featured-right">
                    <div class="featured-info ${projects[0].colorClass}">
                        <div class="project-meta-top">
                            <span class="project-year">${projects[0].year}</span>
                            <span class="project-client">${projects[0].client}</span>
                        </div>
                        
                        <h3 class="work-card-title">${projects[0].name}</h3>
                        
                        <div class="project-tags">
                            ${projects[0].categories.map(cat => `<span class="tag-pill">${cat}</span>`).join('')}
                        </div>
                        
                        <p class="work-card-desc">${projects[0].description}</p>
                        
                        <a href="#" class="btn btn-outline-dark">
                            explore
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                    <!-- Small image placeholder or secondary view if needed, keeping structure but maybe use image logic -->
                    <div class="featured-image-small">
                         <div class="work-image-container">
                            <img src="/images/project-1-detail.png" alt="Creator Micro 2 Detail" class="project-image" style="object-fit: cover; width: 100%; height: 100%;">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Row 2: Nexus Identity -->
            <div class="work-card work-card-info ${projects[1].colorClass}">
                <div class="project-meta-top ${projects[1].textColor === 'white' ? 'white-text' : ''}">
                    <span class="project-year">${projects[1].year}</span>
                    <span class="project-client">${projects[1].client}</span>
                </div>

                <h3 class="work-card-title ${projects[1].textColor === 'white' ? 'white' : ''}">${projects[1].name}</h3>
                
                <div class="project-tags">
                    ${projects[1].categories.map(cat => `<span class="tag-pill ${projects[1].textColor === 'white' ? 'light-tag' : 'dark-tag'}">${cat}</span>`).join('')}
                </div>

                <p class="work-card-desc ${projects[1].textColor === 'white' ? 'white' : ''}">${projects[1].description}</p>
                
                <a href="#" class="btn ${projects[1].textColor === 'white' ? 'btn-outline' : 'btn-outline-dark'}">
                    explore
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
            <div class="work-card work-card-image wide">
                <div class="work-image-container">
                    <img src="${projects[1].image}" alt="${projects[1].name}" class="project-image">
                </div>
            </div>

            <!-- Row 3: K-Studio -->
            <div class="work-card work-card-info ${projects[2].colorClass}">
                <div class="project-meta-top">
                    <span class="project-year">${projects[2].year}</span>
                    <span class="project-client">${projects[2].client}</span>
                </div>

                <h3 class="work-card-title">${projects[2].name}</h3>
                
                <div class="project-tags">
                    ${projects[2].categories.map(cat => `<span class="tag-pill dark-tag">${cat}</span>`).join('')}
                </div>

                <p class="work-card-desc">${projects[2].description}</p>
                
                <a href="#" class="btn btn-outline-dark">
                    explore
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
            <div class="work-card work-card-image wide">
                <div class="work-image-container">
                     <img src="${projects[2].image}" alt="${projects[2].name}" class="project-image">
                </div>
            </div>
        </div>
    </section>
  `;
}
