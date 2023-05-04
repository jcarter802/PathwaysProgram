const uri = 'api/journalitems';
let todos = [];

function getItems() {

    var uriFlex = uri;
    var searchEmotion = document.getElementById('ddlSearchEmotion').value;
    var searchDate = document.getElementById('txtSearchDate').value;
    if (searchEmotion != '') {
        uriFlex += '/emotion/' + searchEmotion;
    }
    if (searchDate != '') {
        uriFlex += '/date/' + moment(searchDate).format('MMDDYYYY');
    }

    fetch(uriFlex)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('Unable to get items.', error));
}

function addItem() {
    const addEntryTime = moment().format('YYYY-MM-DDThh:mm:ss'); // JSON ISO 8601 Format
    const addJournalEntry = document.getElementById('txtEntry');
    const addEmotion = document.getElementById('ddlEmotion');

    const item = {
        entryTime: addEntryTime,
        entry: addJournalEntry.value.trim(),
        emotion: addEmotion.options[addEmotion.selectedIndex].value
    };

    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(response => response.json())
        .then(() => {
            getItems();
            addJournalEntry.value = '';
        })
        .catch(error => console.error('Unable to add item.', error));
}

function deleteItem(id) {
    fetch(`${uri}/${id}`, {
        method: 'DELETE'
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to delete item.', error));
}

function editJournalEntry(id) {
    const item = todos.find(item => item.id === id);

    document.getElementById('hfId').value = item.id;
    document.getElementById('txtEntry').value = item.entry;
    document.getElementById('ddlEmotion').value = item.emotion;
    document.getElementById('btnAdd').style.display = 'None';
    document.getElementById('editBtns').style.display = 'inline-block';
}

function clearEdit() {
    document.getElementById('hfId').value = '';
    document.getElementById('txtEntry').value = '';
    document.getElementById('ddlEmotion').value = '';
    document.getElementById('btnAdd').style.display = 'Block'
    document.getElementById('editBtns').style.display = 'none'
}

function updateItem() {
    const itemId = document.getElementById('hfId').value;
    const addEntryTime = moment().format('YYYY-MM-DDThh:mm:ss'); // JSON ISO 8601 Format
    const addJournalEntry = document.getElementById('txtEntry');
    const addEmotion = document.getElementById('ddlEmotion');
    const item = {
        id: parseInt(itemId, 10),
        entryTime: addEntryTime,
        entry: addJournalEntry.value.trim(),
        emotion: addEmotion.options[addEmotion.selectedIndex].value
    };

    fetch(`${uri}/${itemId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to update item.', error));

    clearEdit();

    return false;
}

function _displayCount(itemCount) {
    const name = (itemCount === 1) ? 'entry' : 'Journal Entries';

    document.getElementById('counter').innerText = `${itemCount} ${name}`;
}

function _displayItems(data) {
    const tBody = document.getElementById('journalEntries');
    tBody.innerHTML = '';

    _displayCount(data.length);

    const button = document.createElement('button');

    data.forEach(item => {

        let txtEntryDate = document.createTextNode(moment(item.entryTime).format('M/DD/YY h:mm A'));
        let txtEntry = document.createTextNode(item.entry);
        let txtEmotion = document.createTextNode(item.emotion);

        let editButton = button.cloneNode(false);
        editButton.innerText = 'Edit';
        editButton.setAttribute('onclick', `editJournalEntry(${item.id})`);

        let deleteButton = button.cloneNode(false);
        deleteButton.innerText = 'Delete';
        deleteButton.setAttribute('onclick', `deleteItem(${item.id})`);

        let tr = tBody.insertRow();

        let td1 = tr.insertCell(0);
        td1.appendChild(txtEntryDate);

        let td2 = tr.insertCell(1);
        td2.appendChild(txtEntry);

        let td3 = tr.insertCell(2);
        td3.appendChild(txtEmotion);

        let td4 = tr.insertCell(3);
        td4.appendChild(editButton);

        let td5 = tr.insertCell(4);
        td5.appendChild(deleteButton);
    });

    todos = data;
}