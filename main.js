$(document).ready(function() {
    $('header button').click (function() {
        alert("Expandir formulario")
    })

    $('form').on('submit', function (e) {
        e.preventDefault();
        const enderecoDaNovaTarefa = $('#tarefa').val();
        const novaTarefa = $('<li></li>');
        $(`
            <div class="link">
                <a href="${enderecoDaNovaTarefa}" target="_blank" tittle="nova tarefa">
                    
                </a>
            </div>
        `).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#tarefa').val('')
    })
})