document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', (e) => {
        const header = e.target.closest('.faq-heading');

        if (!header) return;
        const group = header.parentElement;
        const body = group.querySelector('.faq-body');
        const icon = header.querySelector('i');

        // icons Toggle 

        icon.classList.toggle('fa-plus')
        icon.classList.toggle('fa-minus')

        body.classList.toggle('open')

        const otherGroups = faqContainer.querySelectorAll('.faq-group')

        otherGroups.forEach((otherGroup) => {
            if (otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq-body');
                const otherIcon = otherGroup.querySelector('i');

                otherGroupBody.classList.remove('open')
                otherIcon.classList.remove('fa-minus')
                otherIcon.classList.add('fa-plus')

            }
        })
    })
});