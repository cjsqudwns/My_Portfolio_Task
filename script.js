document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // 실제 제출 막기

    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const message = contactForm.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
      alert("모든 칸을 입력해주세요!");
      return;
    }

    // 유효성 통과 시
    alert("메시지가 성공적으로 전송되었습니다!");
    contactForm.reset(); // 폼 초기화
  });
});
