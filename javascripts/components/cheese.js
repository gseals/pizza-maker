import utilities from '../helpers/utilities.js';

const cheesePrint = () => {
    let domString = '<div class="col-4">';
    domString += '<h2>Cheese</h2>';
    domString += '</div>'
    utilities.printToDom('cheese-counter', domString);
};

export default { cheesePrint };