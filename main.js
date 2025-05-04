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
                <a target="_blank" tittle="nova tarefa">
                ${enderecoDaNovaTarefa}
                </a>
            </div>
        `).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#tarefa').val('')
    })

    $('ul').on('click', 'li', function(e){
        $(this).css('text-decoration', 'line-trough');
    })

})

