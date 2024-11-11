document.addEventListener('DOMContentLoaded', function() {
    // 새로운 기술 스킬 항목을 동적으로 추가
    const skillsList = document.querySelector('#skills ul');
    const newSkill = document.createElement('li');
    newSkill.textContent = 'Node.js'; // 새로운 기술
    skillsList.appendChild(newSkill); // 리스트에 추가

    // 새로운 연락처 정보를 동적으로 추가
    const contactSection = document.querySelector('#contact');
    const newContact = document.createElement('p');
    newContact.innerHTML = 'LinkedIn: <a href="https://www.linkedin.com/in/username" target="_blank">linkedin.com/in/username</a>';
    contactSection.appendChild(newContact); // 연락처 섹션에 추가

    // 페이지 제목을 변경
    const pageTitle = document.querySelector('header h1');
    pageTitle.textContent = '나의 자기소개 페이지'; // 제목 변경

    // 기술 스킬 섹션의 스타일 변경
    const skillsSection = document.querySelector('#skills');
    skillsSection.style.color = 'blue';
    skillsSection.style.fontSize = '18px';
});
