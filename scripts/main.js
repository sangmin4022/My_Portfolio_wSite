document.addEventListener('DOMContentLoaded', () => {
    const navLinks = [
        { text: 'About', href: '#about' },
        { text: 'Projects', href: '#projects' },
        { text: 'Contact', href: '#contact' }
    ];

    const navElement = document.querySelector('.site-nav');
    if (navElement) {
        navElement.innerHTML = navLinks
            .map(link => `<a href="${link.href}">${link.text}</a>`)
            .join('');
    }

    const heroCopy = document.querySelector('.hero-copy');
    if (heroCopy) {
        heroCopy.textContent = '깊이 있는 디자인과 명확한 사용자 흐름으로 방문자에게 빠르게 핵심을 전달하는 웹을 만듭니다.';
    }

    const heroActions = document.querySelector('.hero-actions');
    if (heroActions) {
        heroActions.innerHTML = `
            <a href="#projects" class="button primary">View projects</a>
            <a href="#about" class="button secondary">About me</a>
        `;
    }

    const aboutHeader = document.querySelector('#about .section-header');
    if (aboutHeader) {
        aboutHeader.innerHTML = `
            <span class="section-label">About</span>
            <h2>Simple, elegant, and easy to use.</h2>
        `;
    }

    const aboutText = document.querySelector('#about p');
    if (aboutText) {
        aboutText.textContent = '프론트엔드 개발과 UX 설계를 결합해, 누구나 편하게 사용할 수 있는 웹사이트를 만듭니다. 명확한 정보 구성으로 바로 실행 가능한 결과를 제공합니다.';
    }

    const projects = [
        {
            title: 'Creative Landing Page',
            description: '고급스러운 느낌의 반응형 랜딩 페이지를 HTML/CSS/JS로 구현했습니다.',
            tech: 'HTML · CSS · JavaScript',
            link: '#'
        },
        {
            title: 'Dashboard UI Prototype',
            description: '데이터 시각화와 카드 레이아웃을 활용한 관리자 대시보드 UI입니다.',
            tech: 'HTML · CSS · JavaScript',
            link: '#'
        },
        {
            title: 'Interactive Portfolio',
            description: '스크롤 애니메이션과 모달을 포함한 인터랙티브 포트폴리오 페이지입니다.',
            tech: 'HTML · CSS · JavaScript',
            link: '#'
        }
    ];

    const projectList = document.getElementById('project-list');
    if (projectList) {
        projectList.innerHTML = '';
        projects.forEach(project => {
            const card = document.createElement('article');
            card.className = 'project-card';
            card.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <span>${project.tech}</span>
                <a href="${project.link}" class="project-link">View project</a>
            `;
            projectList.appendChild(card);
        });
    }
});