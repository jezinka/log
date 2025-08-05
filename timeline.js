const container = document.getElementById('timeline');

const groups = new vis.DataSet([
    {id: 'books', content: 'Książki'},
    {id: 'tv', content: 'Seriale<br>Filmy<br>Dokumenty'},
    {id: 'games', content: 'Gry'},
    {id: 'anime', content: 'Anime'}
]);

const today = new Date();

const timeline = new vis.Timeline(container, items, groups, {
    stack: false,
    zoomable: true,
    orientation: 'top',
    start: new Date(2024, 10, 30),
    end: new Date(today.getFullYear(), today.getMonth() + 1, today.getDate()),
    min: new Date(2024, 10, 30), // lower limit of visible range
    max: new Date(today.getFullYear(), today.getMonth() + 1, today.getDate()), // upper limit of visible range
    zoomMin: 24 * 60 * 60 * 1000 * 24
});

timeline.on('select', function (props) {
    if (props.items.length > 0) {
        const item = items.get(props.items[0]);
        if (item.url) {
            window.open(item.url, '_blank');
        }
    }
});