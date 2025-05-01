
function typingAnimation(fixed_sentence,sentences, elementId, speed = 100, pause = 2000) {
  const element = document.getElementById(elementId);
  let sentenceIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {

    const currentSentence = sentences[sentenceIndex];
    
    // Add or remove character
    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;

    }

    element.textContent = fixed_sentence + currentSentence.substring(0, charIndex);

    let currentSpeed = isDeleting ? speed / 2 : speed;

    // When sentence is fully typed
    if (!isDeleting && charIndex === currentSentence.length) {
      currentSpeed = pause;
      isDeleting = true;
    }

    // When sentence is fully deleted
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      sentenceIndex = (sentenceIndex + 1) % sentences.length;
      currentSpeed = speed;
    }

    setTimeout(type, currentSpeed);
  }

  type();
}


window.onload = () => {
  typingAnimation("I'm Sameer \n ", ["an engineer", "a data scientist"], "typewriter");
};

