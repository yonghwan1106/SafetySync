// SafetySync - 전기안전 공모전 제안서 스크립트

document.addEventListener('DOMContentLoaded', function() {
  // 네비게이션 스크롤 효과
  const navbar = document.querySelector('.navbar');
  const progressBar = document.querySelector('.progress-bar');
  const sections = document.querySelectorAll('.section');
  
  // 스크롤 이벤트 리스너
  window.addEventListener('scroll', function() {
    // 네비게이션 바 스크롤 효과
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // 프로그레스 바 업데이트
    const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = `${scrollPercent}%`;
    
    // 섹션 가시성 확인
    checkSectionsVisibility();
  });
  
  // 섹션 가시성 체크 함수
  function checkSectionsVisibility() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        section.classList.add('visible');
      }
    });
  }
  
  // 초기 섹션 가시성 체크
  checkSectionsVisibility();
  
  // 스무스 스크롤 함수
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // 모바일 메뉴 토글
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // 현재 페이지 활성화
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
});