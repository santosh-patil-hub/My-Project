$(document).ready(function () {
    // Modal Handling
    $('.description').click(function () {
        const cardTitle = $(this).closest('.card').find('.card-header').text();
        const cardDescription = $(this).data('bs-desc') || $(this).text();
        const cardDate = $(this).data('bs-date');

        $('#descModalLabel').text(cardTitle);
        $('#modalDesc').text(cardDescription);
        $('#modalDate').text(cardDate);
    });

    // Display Alerts from Messages
    $('#message-container .alert').each(function () {
        const message = $(this).text().trim();
        const type = $(this).hasClass('alert-success') ? 'success' : 'error';
        const title = type === 'success' ? 'Successfully!' : 'Error!';

        Swal.fire({
            title: title,
            text: message,
            icon: type,
            confirmButtonText: 'OK'
        });
    });

    // Delete Button Confirmation
    $('.delete-btn').on('click', function (event) {
        event.preventDefault(); // Prevent the default form submission

        const $form = $(this).closest('form'); // Find the closest form element

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

    // Handle Completion Checkbox
    $(".complate").click(function () {
        const $checkbox = $(this);
        const $card = $checkbox.closest('.card');
        const $header = $card.find(".card-header");
        const $editButton = $card.find(".fa-pen-to-square").closest('a');

        const isChecked = $checkbox.is(':checked');

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

