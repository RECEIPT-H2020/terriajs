'use strict';

/*global require*/
var fs = require('fs');

var defaultValue = require('../../third_party/cesium/Source/Core/defaultValue');
var knockout = require('../../third_party/cesium/Source/ThirdParty/knockout');

var createFragmentFromTemplate = require('../Core/createFragmentFromTemplate');

var html = fs.readFileSync(__dirname + '/../Views/SearchPanel.html', 'utf8');

var SearchPanelViewModel = function(options) {
    this.searchText = '';

    this.svgSearch = 'M29.772,26.433l-7.126-7.126c0.96-1.583,1.523-3.435,1.524-5.421C24.169,8.093,19.478,3.401,13.688,3.399C7.897,3.401,3.204,8.093,3.204,13.885c0,5.789,4.693,10.481,10.484,10.481c1.987,0,3.839-0.563,5.422-1.523l7.128,7.127L29.772,26.433zM7.203,13.885c0.006-3.582,2.903-6.478,6.484-6.486c3.579,0.008,6.478,2.904,6.484,6.486c-0.007,3.58-2.905,6.476-6.484,6.484C10.106,20.361,7.209,17.465,7.203,13.885z';
};

SearchPanelViewModel.create = function(container, options) {
    container = defaultValue(container, document.body);

    var fragment = createFragmentFromTemplate(html);
    var element = fragment.childNodes[0];
    container.appendChild(element);

    var viewModel = new SearchPanelViewModel(options);
    knockout.applyBindings(viewModel, element);

    return viewModel;
};

SearchPanelViewModel.prototype.search = function() {
};

module.exports = SearchPanelViewModel;