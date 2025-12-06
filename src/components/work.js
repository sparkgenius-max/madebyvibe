import { Button } from './button.js';
import { getSliderHTML } from '../components/project-slider.js';

export function Work() {
    const projects = [
        {
            id: 1,
            year: "2025",
            client: "EcoTech Solutions",
            name: "Sustainable Brand Identity",
            categories: ["Branding", "Strategy"],
            description: "Complete brand identity for an eco-friendly tech startup, focusing on sustainability and innovation.",
            image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800",
            featured: true,
            colorClass: "yellow"
        },
        {
            id: 2,
            year: "2024",
            client: "Fashion Forward",
            name: "E-commerce Platform",
            categories: ["Web Design", "UI/UX"],
            description: "Modern e-commerce website with seamless user experience and stunning visual design.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
            layout: "info-first",
            colorClass: "blue",
            textColor: "white"
        },
        {
            id: 3,
            year: "2024",
            client: "FitLife App",
            name: "Mobile Fitness App",
            categories: ["Mobile App", "UI/UX"],
            description: "Intuitive mobile app design for fitness tracking with engaging user interface.",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
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
                        <div class="featured-info-top">
                            <div class="project-meta-top">
                                <span class="project-year">${projects[0].year}</span>
                                <span class="project-client">${projects[0].client}</span>
                            </div>
                            
                            <h3 class="work-card-title">${projects[0].name}</h3>
                            
                            <div class="project-tags">
                                ${projects[0].categories.map(cat => `<span class="tag-pill">${cat}</span>`).join('')}
                            </div>
                        </div>

                        <div class="featured-info-bottom">
                            <p class="work-card-desc">${projects[0].description}</p>
                            ${Button({ text: 'explore', variant: 'outline-dark', href: '#' })}
                        </div>
                    </div>
                    <!-- Small image placeholder or secondary view if needed, keeping structure but maybe use image logic -->
                    <div class="featured-image-small">
                          <div class="work-image-container">
                             <img src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400" alt="Sustainable Brand Identity Detail" class="project-image" style="object-fit: cover; width: 100%; height: 100%;">
                         </div>
                    </div>
                </div>
            </div>

            <!-- Row 2: Nexus Identity -->
            <div class="work-card combined-project">
                <div class="combined-info ${projects[1].colorClass}">
                    <div class="combined-info-top">
                        <div class="project-meta-top ${projects[1].textColor === 'white' ? 'white-text' : ''}">
                            <span class="project-year">${projects[1].year}</span>
                            <span class="project-client">${projects[1].client}</span>
                        </div>

                        <h3 class="work-card-title ${projects[1].textColor === 'white' ? 'white' : ''}">${projects[1].name}</h3>
                        
                        <div class="project-tags">
                            ${projects[1].categories.map(cat => `<span class="tag-pill ${projects[1].textColor === 'white' ? 'light-tag' : 'dark-tag'}">${cat}</span>`).join('')}
                        </div>
                    </div>

                    <div class="combined-info-bottom">
                        <p class="work-card-desc ${projects[1].textColor === 'white' ? 'white' : ''}">${projects[1].description}</p>
                        
                        ${Button({ text: 'explore', variant: 'outline-dark', href: '#' })}
                    </div>
                </div>
                <div class="combined-image">
                    <div class="work-image-container">
                        <img src="${projects[1].image}" alt="${projects[1].name}" class="project-image">
                    </div>
                </div>
            </div>

            <!-- Row 3: K-Studio -->
            <div class="work-card combined-project">
                <div class="combined-info ${projects[2].colorClass}">
                    <div class="combined-info-top">
                        <div class="project-meta-top">
                            <span class="project-year">${projects[2].year}</span>
                            <span class="project-client">${projects[2].client}</span>
                        </div>

                        <h3 class="work-card-title">${projects[2].name}</h3>
                        
                        <div class="project-tags">
                            ${projects[2].categories.map(cat => `<span class="tag-pill dark-tag">${cat}</span>`).join('')}
                        </div>
                    </div>

                    <div class="combined-info-bottom">
                        <p class="work-card-desc">${projects[2].description}</p>
                        
                        ${Button({ text: 'explore', variant: 'outline-dark', href: '#' })}
                    </div>
                </div>
                <div class="combined-image">
                    <div class="work-image-container">
                         <img src="${projects[2].image}" alt="${projects[2].name}" class="project-image">
                    </div>
                </div>
            </div>
        </div>

        <!-- Embedded Slider (was ProjectSlider) -->
        ${getSliderHTML()}
    </section>
  `;
}
