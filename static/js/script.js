document.addEventListener('DOMContentLoaded', (event) => {
    const descModal = document.getElementById('descModal');
    descModal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget; // Button that triggered the modal
        const desc = button.getAttribute('data-desc'); // Extract info from data-* attributes
        const modalDesc = document.getElementById('modalDesc');
        modalDesc.textContent = desc; // Update the modal's content.
    });
});


$(document).ready(function () {
    $('.description').click(function () {
        var cardTitle = $(this).closest('.card').find('.card-header').text();
        var cardDescription = $(this).text();

        // Set the modal title and description
        $('#descModalLabel').text(cardTitle);
        $('#modalDesc').text(cardDescription);
    });
});



$(document).ready(function () {
    $('#message-container .alert').each(function () {
        var message = $(this).text().trim();
        var type = $(this).hasClass('alert-success') ? 'success' : 'error';
        var title = type === 'success' ? 'Successfully!' : 'Error!';

        Swal.fire({
            title: title,
            text: message,
            icon: type,
            confirmButtonText: 'OK'
        });
    });
});


$(document).ready(function () {
    $('.delete-btn').on('click', function (event) {
        event.preventDefault(); // Prevent the default form submission

        var $form = $(this).closest('form'); // Find the closest form element

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!"
        }).then((result) => {
            if (result.isConfirmed) {
                $form.submit(); // Submit the form if confirmed
            }
        });
    });
});



$(document).ready(function () {
    $(".complate").click(function () {
        var $checkbox = $(this);
        var $card = $checkbox.closest('.card');
        var $header = $card.find(".card-header");
        var $editButton = $card.find(".fa-pen-to-square").closest('a');

        var isChecked = $checkbox.is(':checked');

        if (isChecked) {
            Swal.fire({
                title: 'Confirm Completion',
                text: 'Are you sure you want to mark this as complete?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Yes, complete it!',
                cancelButtonText: 'No, keep it as is'
            }).then((result) => {
                if (result.isConfirmed) {
                    $header.css("text-decoration", "line-through");
                    $editButton.css({
                        "pointer-events": "none",
                        "opacity": "0.5"
                    });
                } else {
                    $checkbox.prop('checked', false);  // Uncheck the checkbox
                }
            });
        } else {
            // If checkbox is unchecked, revert the changes
            $header.css("text-decoration", "none");
            $editButton.css({
                "pointer-events": "auto",
                "opacity": "1"
            });
        }
    });
});


// $(document).ready(function () {
//     $(".complate").click(function () {
//         var $card = $(this).closest('.card');
//         var $header = $card.find(".card-header");
//         var $editButton = $card.find(".fa-pen-to-square").closest('a');

//         var isChecked = $(this).is(':checked');

//         if (isChecked) {
//             // Show SweetAlert2 confirmation dialog
//             Swal.fire({
//                 title: 'Confirm Completion',
//                 text: 'Are you sure you want to mark this as complete?',
//                 icon: 'question',
//                 showCancelButton: true,
//                 confirmButtonText: 'Yes, complete it!',
//                 cancelButtonText: 'No, keep it as is'
//             }).then((result) => {
//                 if (result.isConfirmed) {
//                     // User confirmed the action
//                     $header.css("text-decoration", "line-through");
//                     $editButton.css({
//                         "pointer-events": "none",
//                         "opacity": "0.5"
//                     });
//                 } else {
//                     // User canceled the action
//                     $(this).prop('checked', false);  // Uncheck the checkbox
//                 }
//             });
//         } else {
//             // If checkbox is unchecked, revert the changes
//             $header.css("text-decoration", "none");
//             $editButton.css({
//                 "pointer-events": "auto",
//                 "opacity": "1"
//             });
//         }
//     });
// });




