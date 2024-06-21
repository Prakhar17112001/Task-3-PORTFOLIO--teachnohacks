document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('.skill');
    const projects = document.querySelectorAll('.project-card');

    function handleScroll() {
        const triggerBottom = window.innerHeight / 5 * 4;

        skills.forEach(skill => {
            const skillTop = skill.getBoundingClientRect().top;
            if(skillTop < triggerBottom) {
                skill.style.opacity = '1';
                skill.style.transform = 'translateY(0)';
            } else {
                skill.style.opacity = '0';
                skill.style.transform = 'translateY(20px)';
            }
        });

        projects.forEach(project => {
            const projectTop = project.getBoundingClientRect().top;
            if(projectTop < triggerBottom) {
                project.style.opacity = '1';
                project.style.transform = 'translateY(0)';
            } else {
                project.style.opacity = '0';
                project.style.transform = 'translateY(20px)';
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on load to show elements already in view
});
