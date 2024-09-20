function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Array de videos de YouTube (puedes cambiar los IDs por los de tus videos)
const videos = [
    "dQw4w9WgXcQ", // Reemplaza con los IDs de tus videos
    "3JZ_D3ELwOQ",
    "V-_O7nl0Ii0",
    "eVTXPUF4Oz4",
    "60ItHLz5WEA",
    "K4DyBUG242c",
    "JGwWNGJdvx8",
    "OPf0YbXqDm0"
];

// Selecciona el contenedor de los videos
const videoGrid = document.getElementById('video-grid');

// Función para crear una tarjeta de video
function createVideoCard(videoId) {
    const div = document.createElement('div');
    div.classList.add('video-card');
    div.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${videoId}" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
    `;
    return div;
}

// Añadir los videos al grid
videos.forEach(videoId => {
    const videoCard = createVideoCard(videoId);
    videoGrid.appendChild(videoCard);
});

