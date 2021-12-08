import initSelects from '../finctions/initSelects';
import initRequestLetaiModal from '../finctions/initModals/initRequestLetaiModal';
import initBadRequestLetaiModal from '../finctions/initModals/initBadRequestLetaiModal';

document.addEventListener('DOMContentLoaded', () => {
  initSelects();
  initRequestLetaiModal();
  initBadRequestLetaiModal();


  $("#address").suggestions({
    token: "a289c2b7ddef08f438c0c3d326f474d32a3e4a7c",
    type: "ADDRESS",
    onSelect: function(suggestion) {
      // 
    }
  });
});
