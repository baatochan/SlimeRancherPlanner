/**
 * Created by barto on 09.09.17.
 */

var desiredWidth = 1680;
var desiredHeight = 920;

var leftOffset = 0;
var topOffset = 0;

var isNumberOfItemsHidden = false;

//region arrays

var defaultValuesPlots = [
	{
		'id': 1, 'leftPosition': 341, 'topPosition': 614, 'align': 'bottom-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 2, 'leftPosition': 341, 'topPosition': 655, 'align': 'top-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 3, 'leftPosition': 381, 'topPosition': 614, 'align': 'bottom-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 4, 'leftPosition': 381, 'topPosition': 655, 'align': 'top-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 5, 'leftPosition': 441, 'topPosition': 365, 'align': 'top-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 6, 'leftPosition': 489, 'topPosition': 268, 'align': 'bottom-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 7, 'leftPosition': 552, 'topPosition': 270, 'align': 'bottom-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 8, 'leftPosition': 561, 'topPosition': 363, 'align': 'top-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 9, 'leftPosition': 776, 'topPosition': 192, 'align': 'bottom-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 10, 'leftPosition': 775, 'topPosition': 232, 'align': 'top-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 11, 'leftPosition': 893, 'topPosition': 191, 'align': 'bottom-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 12, 'leftPosition': 893, 'topPosition': 232, 'align': 'top-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 13, 'leftPosition': 893, 'topPosition': 318, 'align': 'top-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 14, 'leftPosition': 934, 'topPosition': 191, 'align': 'bottom-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 15, 'leftPosition': 934, 'topPosition': 232, 'align': 'top-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 16, 'leftPosition': 934, 'topPosition': 318, 'align': 'top-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 17, 'leftPosition': 1069, 'topPosition': 595, 'align': 'bottom-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 18, 'leftPosition': 1069, 'topPosition': 648, 'align': 'top-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 19, 'leftPosition': 1108, 'topPosition': 595, 'align': 'bottom-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 20, 'leftPosition': 1108, 'topPosition': 648, 'align': 'top-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 21, 'leftPosition': 1150, 'topPosition': 708, 'align': 'top-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 22, 'leftPosition': 1152, 'topPosition': 233, 'align': 'bottom-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 23, 'leftPosition': 1167, 'topPosition': 305, 'align': 'top-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 24, 'leftPosition': 1218, 'topPosition': 222, 'align': 'bottom-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 25, 'leftPosition': 1262, 'topPosition': 248, 'align': 'top-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 26, 'leftPosition': 1258, 'topPosition': 325, 'align': 'top-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'W', 'leftPosition': 374, 'topPosition': 570, 'align': 'bottom-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'O1', 'leftPosition': 512, 'topPosition': 518, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'O2', 'leftPosition': 550, 'topPosition': 604, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'O3', 'leftPosition': 550, 'topPosition': 690, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'O4', 'leftPosition': 674, 'topPosition': 518, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'O5', 'leftPosition': 636, 'topPosition': 604, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'O6', 'leftPosition': 636, 'topPosition': 690, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}
];

var plots;

var regions = [
	{//660 410 -188 44
		'leftPosition': 472, 'topPosition': 454, 'align': 'bottom-right', 'title': "Ogden's Retreat", 'show': true, 'width': 267, 'height': 301, 'background': '33, 86, 60', 'bgSize': 250
	}, {
		'leftPosition': 0, 'topPosition': 0, 'align': 'bottom-right', 'title': "Mochi's Manor", 'show': false
	}
];

var slimeTypes = [
	'Pink Slime',
	'Rock Slime',
	'Tabby Slime',
	'Phosphor Slime',
	'Rad Slime',
	'Honey Slime',
	'Boom Slime',
	'Crystal Slime',
	'Quantum Slime',
	'Hunter Slime',
	'Mosaic Slime',
	'Dervish Slime',
	'Tangle Slime',
	'Saber Slime'
];

var waterSlimeTypes = [
	'Puddle Slime'
];

var fireSlimeTypes = [
	'Fire Slime'
];

var foodTypes = [
	{
		'name': 'Carrot', 'amount': 20
	}, {
		'name': 'Heart Beet', 'amount': 15
	}, {
		'name': 'Oca Oca', 'amount': 15
	}, {
		'name': 'Odd Onion', 'amount': 20
	}, {
		'name': 'Silver Parsnip', 'amount': 15
	}, {
		'name': 'Pogofruit', 'amount': 20
	}, {
		'name': 'Cuberry', 'amount': 15
	}, {
		'name': 'Mint Mango', 'amount': 15
	}, {
		'name': 'Phase Lemon', 'amount': 15
	}, {
		'name': 'Prickle Pear', 'amount': 15
	}
];

var meatTypes = [
	'Mixed',
	'Hen Hen',
	'Stony Hen',
	'Briar Hen',
	'Painted Hen'
];

//endregion

$(document).ready(function () {
	plots = $.extend(true, [], defaultValuesPlots);

	calculateBodySize();
	showPlots();
	showMaximizedPlots();

	$(window).resize(reloadSite);

	$('[id^="plotA-"]').click(openSetUpForm);

	$('#firstChoice').change(loadSecondAndThirdChoice);

	$('#secondChoice').change(loadNumberOfItemsForGarden);

	$('#clearPlot').click(clearPlot);

	$('#savePlot').click(savePlot);

	$('#resetButton').click(resetData);

	$('#numberOfItemsLink').click(showHideNumberOfItems);

	$('#exportLink').click(saveData);

	$('#importLink').click(openImportModal);

	$('#importDataButton').click(importDataFromText);

	$('#importDataFileInput').on('change', importDataFromFile);

	$('#exportMenu').mouseenter(moveToTop);

	var donateBox = $('#donateBox');
	var donateText = $('#donateText');

	donateBox.mouseenter(function () {
		donateText.show();
	});

	donateBox.mouseleave(function () {
		donateText.hide();
	});

	var exportMenu = $('#exportMenu');
	var numberOfItemsLink = $('#numberOfItemsLink');
	var issueLink = $('#issueLink');
	var exportLink = $('#exportLink');
	var importLink = $('#importLink');
	var resetLink = $('#resetLink');
	var menuText = $('#menuText');

	numberOfItemsLink.mouseenter(function () {
		if (isNumberOfItemsHidden) {
			menuText.text('Show number of items in plots');

		} else {
			menuText.text('Hide number of items in plots');
		}
		menuText.show();
	});

	issueLink.mouseenter(function () {
		menuText.text('Report issue');
		menuText.show();
	});

	exportLink.mouseenter(function () {
		menuText.text('Export plan');
		menuText.show();
	});

	importLink.mouseenter(function () {
		menuText.text('Import plan');
		menuText.show();
	});

	resetLink.mouseenter(function () {
		menuText.text('Reset plan');
		menuText.show();
	});

	exportMenu.mouseleave(function () {
		menuText.hide();
	});
});

//region saveMenu

/**
 * Save plot array to file
 */
function saveData(e) {
	e.preventDefault();
	$('#downloadData').modal('show');

	var downloadLink = $('#downloadButton');
	downloadLink.attr('download', 'export.txt');
	downloadLink.attr('href', 'data:text/plain;base64,' + btoa(JSON.stringify(plots)));
}

/**
 * Open the modal with textarea for stringified data to import
 */
function openImportModal(e) {
	e.preventDefault();
	$('#importData').modal('show');
	$('#importDataTextArea').val('');
	var importDataFileInput = $('#importDataFileInput');
	importDataFileInput.val('');
	$('#fileError').css('display', 'none');
	$('#fileLoadingAnimation').css('display', 'none');
	var fileSupport = checkFileReaderSupport();
	if(!fileSupport) {
		importDataFileInput.css('display', 'none');
		$('#importDataTextInput').css('display', 'block');
		$('#importDataButton').removeClass('disabled');
	}
}

/**
 * Check if browser support file input
 * @returns {boolean} if browser support file input
 */
function checkFileReaderSupport() {
	return !!(window.File && window.FileReader && window.FileList && window.Blob);
}

/**
 * Import data from stringified data provided by user in textarea
 */
function importDataFromText() {
	var dataToImport = $('#importDataTextArea').val(); //possibly may be changed to html5 client side file handling https://www.html5rocks.com/en/tutorials/file/dndfiles/
	plots = JSON.parse(dataToImport);
	reloadSite();
	$('#importData').modal('hide');
}

/**
 * Import data by uploading exported file
 */
function importDataFromFile() {
	$('#fileLoadingAnimation').css('display', 'block');
	var file = this.files[0];
	var textType = /text.*/;

	if (file.type.match(textType)) {
		var reader = new FileReader();

		reader.onload = function () {
			// noinspection JSCheckFunctionSignatures
			plots = JSON.parse(reader.result);
		};

		reader.readAsText(file);
	} else {
		$('#fileError').css('display', 'block');
		return;
	}

	setTimeout(function(){
		$('#importData').modal('hide');
		reloadSite();
	}, 1000);
}

/**
 * Reset data to factory value
 */
function resetData(e) {
	e.preventDefault();
	plots = $.extend(true, [], defaultValuesPlots); //plots = defaultValuesPlots doesn't make a copy, it points to the same array
	reloadSite();
	$('#confirmReset').modal('hide');
}

/**
 * Show or hide number of item text on plots
 */
function showHideNumberOfItems(e) {
	e.preventDefault();
	if (isNumberOfItemsHidden) {
		$('.hideForReal').removeClass('hideForReal');
		$('#numberOfItemsLink').find('img').attr('src', 'img/hideNOI.png');
		$('#menuText').text('Hide number of items in plots');
		isNumberOfItemsHidden = false;
	} else {
		$('.numberOfItemsInPlot').addClass('hideForReal');
		$('#numberOfItemsLink').find('img').attr('src', 'img/showNOI.png');
		$('#menuText').text('Show number of items in plots');
		isNumberOfItemsHidden = true;
	}
}

//endregion

//region loadSite

/**
 * Refresh plot and big plot divs
 */
function reloadSite() {
	calculateBodySize();
	showPlots();
	showMaximizedPlots()
}

/**
 * Calculate offset for plot divs (map offset)
 */
function calculateBodySize() {
	var actualWidth = window.innerWidth;
	var actualHeight = window.innerHeight;

	if (actualWidth < 1100) {
		actualWidth = 1100;
	}
	if (actualHeight < 600) {
		actualHeight = 600;
	}

	var imageWidth = 2762;
	var imageHeight = 1734;

	var imageLeftOffset = (actualWidth-imageWidth)/2;
	var imageTopOffset = (actualHeight-imageHeight)/2;

	$(document.body).css('background-position', imageLeftOffset + 'px ' + imageTopOffset + 'px');

	leftOffset = (actualWidth-desiredWidth)/2;
	topOffset = (actualHeight-desiredHeight)/2;

	$(document.body).css('width', actualWidth);
	$(document.body).css('height', actualHeight);
}

/**
 * Create (or update) HTML for small plots
 */
function showPlots() {
	var plotBorder = $('.plot').css('border-top-width');
	plotBorder = plotBorder.slice(0, -2);
	plotBorder = parseInt(plotBorder);
	var plotTemplate = $('#plotTemplate');


	$.each(plots, function (key, value) {
		var plot = $('#plotA-' + value.id);
		if (plot.length === 0) {
			plot = plotTemplate.clone();
			plot.attr('id', 'plotA-' + value.id);
			plot.css('display', '');
			plot.css('z-index', 0);
			plot.find('.plot').attr('id', 'plot-' + value.id);
			plot.find('.plotNumber').text(value.id);
			plotTemplate.after(plot);
		}
		var leftPosition = value.leftPosition + leftOffset - plotBorder;
		var topPosition = value.topPosition + topOffset - plotBorder;
		plot.find('.plot').css('left', leftPosition + 'px');
		plot.find('.plot').css('top', topPosition + 'px');
	});
}

/**
 * Create (or update) HTML for big plots
 */
function showMaximizedPlots() {
	var plotBorder = $('.plotMaximized').css('border-top-width');
	plotBorder = plotBorder.slice(0, -2);
	plotBorder = parseInt(plotBorder);
	var plotTemplate = $('#plotMaximizedTemplate');
	var regionTemplate = $('#regionTemplate');

	$.each(regions, function (key, value) {
		var simplifiedName = value.title.replace(/\s/g, "-").replace(/'/g, "").toLowerCase();
		var plot = $('#' + simplifiedName + '-region');
		if (value.show) {
			if (plot.length === 0) {
				plot = regionTemplate.clone();
				plot.attr('id', simplifiedName + '-region');
				plot.css('z-index', -1);
				regionTemplate.after(plot);
			}
			var leftPosition = value.leftPosition + leftOffset - plotBorder;
			var topPosition = value.topPosition + topOffset - plotBorder;
			plot.css('left', leftPosition + 'px');
			plot.css('top', topPosition + 'px');
			plot.find('.regionName').text(value.title);
			plot.find('.regionName').css('display', 'block');
			plot.css('width', value.width).css('height', value.height);
			console.log(value.bgSize);
			plot.css('background-color', 'rgba(' + value.background + ', 0.7)').css('background-image', 'url(img/region-backgrounds/'+ simplifiedName +'.png)').css('background-size', value.bgSize + 'px');
		}
	});

	$.each(plots, function (key, value) {
		var plot = $('#plotMaximizedA-' + value.id);
		if(value.occupied) {
			if (plot.length === 0) {
				plot = plotTemplate.clone();
				plot.attr('id', 'plotMaximizedA-' + value.id);
				plot.css('z-index', 0);
				plotTemplate.after(plot);
			}
			plot.attr('title', value.description);
			$('#plotA-' + value.id).css('display', 'none');
			plot.css('display', '');
			var leftAlignOffset = 0;
			var topAlignOffset = 0;
			var plotSize = $('.plot').css('width'); //it should be square so checking only one value
			plotSize = parseInt(plotSize);
			var plotMaximizedSize = $('.plotMaximized').css('width');
			plotMaximizedSize = parseInt(plotMaximizedSize);
			switch (value.align) {
				case 'top-left':
					leftAlignOffset = 0;
					topAlignOffset = 0;
					break;
				case 'top-right':
					leftAlignOffset = plotSize - plotMaximizedSize;
					topAlignOffset = 0;
					break;
				case 'bottom-left':
					leftAlignOffset = 0;
					topAlignOffset = plotSize - plotMaximizedSize;
					break;
				case 'bottom-right':
					leftAlignOffset = plotSize - plotMaximizedSize;
					topAlignOffset = plotSize - plotMaximizedSize;
					break;
				case 'center':
					leftAlignOffset = (plotSize - plotMaximizedSize)/2;
					topAlignOffset = (plotSize - plotMaximizedSize)/2;
					break;
			}
			var leftPosition = value.leftPosition + leftOffset + leftAlignOffset - plotBorder;
			var topPosition = value.topPosition + topOffset + topAlignOffset - plotBorder;
			plot.find('.plotMaximized').css('left', leftPosition + 'px');
			plot.find('.plotMaximized').css('top', topPosition + 'px');
			plot.find('.plotMaximized').removeClass('corral garden coop pond silo incinerator');
			plot.find('.plotMaximized').addClass(value.type);
			plot.find('.plotType').text(value.type);
			plot.find('.plotType').css('display', 'block');
			if(value.type === 'corral' && value.firstItem !== null && value.secondItem !== null) {
				plot.find('.plotContent').css('display', 'none');
				plot.find('.corralContentFirstItem').empty();
				plot.find('.corralContentFirstItem').append($('<img>', {
					src: 'img/plotItems/' + value.firstItem + '.png',
					alt: value.firstItem
				}));
				plot.find('.corralContentSecondItem').empty();
				plot.find('.corralContentSecondItem').append($('<img>', {
					src: 'img/plotItems/' + value.secondItem + '.png',
					alt: value.secondItem
				}));
				plot.find('.corralContent').css('display', 'flex');
			} else if (value.firstItem !== null) {
				plot.find('.corralContent').css('display', 'none');
				plot.find('.plotContentImg').attr('src', 'img/plotItems/' + value.firstItem + '.png');
				plot.find('.plotContentImg').attr('alt', value.firstItem);
				plot.find('.plotContent').css('display', 'flex');
			} else {
				plot.find('.corralContent').css('display', 'none');
				plot.find('.plotContent').css('display', 'none');
			}
			plot.find('.numberOfItemsInPlot').text(value.numberOfItems);
			if (value.numberOfItems > 0) {
				plot.find('.numberOfItemsInPlot').css('display', 'block');
			} else {
				plot.find('.numberOfItemsInPlot').css('display', 'none');
			}
		} else {
			plot.css('display', 'none');
			plot.attr('title', '');
			$('#plotA-' + value.id).css('display', 'block');
		}
	});

	var allMaximizedPlots = $('[id^="plotMaximizedA-"]');
	allMaximizedPlots.click(openEditForm);
	allMaximizedPlots.mouseenter(moveToTop);

	var numberOfItems = $('.numberOfItemsInPlot');
	numberOfItems.mouseenter(function () {
		$(this).css('opacity', 1);
	});
	numberOfItems.mouseleave(function () {
		$(this).css('opacity', 0.3);
	});
}

//endregion

//region setupAndEditForm

/**
 * Open form for setting up small plot
 */
function openSetUpForm(e) {
	e.preventDefault();
	$('#setupPlot').modal('show');
	refreshForm();
	var id = $(this).attr('id');
	id = id.slice(6);
	$('#editedPlotNumber').val(id);
	if (id === 'W') {
		$('#setupPlotNumber').text('- waterfall');
		hideChoicesForWaterfall();
	} else {
		$('#setupPlotNumber').text(id);
		showAllFirstChoices();
	}
	$.each(plots, function (key, value) {
		// noinspection EqualityComparisonWithCoercionJS
		if (value.id == id) {
			$('#alignChoice').val(value.align);
			$('#description').val(value.description);
			$('#numberOfItems').val(value.numberOfItems);
		}
	});
}

/**
 * Open form for editing set plot (big)
 */
function openEditForm(e) {
	e.preventDefault();
	$('#setupPlot').modal('show');
	refreshForm();
	var id = $(this).attr('id');
	id = id.slice(15);
	$('#editedPlotNumber').val(id);
	if (id === 'W') {
		$('#setupPlotNumber').text('- waterfall');
		hideChoicesForWaterfall();
	} else {
		$('#setupPlotNumber').text(id);
		showAllFirstChoices();
	}

	var firstChoice = $('#firstChoice');
	var secondChoice = $('#secondChoice');
	var thirdChoice = $('#thirdChoice');

	$.each(plots, function (key, value) {
		// noinspection EqualityComparisonWithCoercionJS
		if (value.id == id) {
			$('#alignChoice').val(value.align);
			$('#description').val(value.description);
			$('#numberOfItems').val(value.numberOfItems);
			if (value.type !== null) {
				firstChoice.val(value.type);
				loadSecondAndThirdChoice();
				if (value.firstItem !== null) {
					secondChoice.val(value.firstItem);
					if (value.secondItem !== null) {
						thirdChoice.val(value.secondItem);
					} else {
						thirdChoice.val('unselected');
					}
				} else {
					secondChoice.val('unselected');
					thirdChoice.val('unselected');
				}
			} else {
				firstChoice.val('unselected');
				secondChoice.val('unselected');
				thirdChoice.val('unselected');
			}
		}
	});
}

/**
 * Function that hides all the choices except for unselected and pond from the first select menu.
 */
function hideChoicesForWaterfall() {
	$('#firstChoiceCorral').css('display', 'none');
	$('#firstChoiceGarden').css('display', 'none');
	$('#firstChoiceCoop').css('display', 'none');
	$('#firstChoiceSilo').css('display', 'none');
	$('#firstChoiceIncinerator').css('display', 'none');
}

/**
 * Function that restores all the choices in the first select menu.
 */
function showAllFirstChoices() {
	$('#firstChoiceCorral').css('display', 'block');
	$('#firstChoiceGarden').css('display', 'block');
	$('#firstChoiceCoop').css('display', 'block');
	$('#firstChoiceSilo').css('display', 'block');
	$('#firstChoiceIncinerator').css('display', 'block');
}

/**
 * Restore form to untouched state
 */
function refreshForm() {
	$('#firstChoice').val('unselected');
	$('#secondChoiceLabel').css('display', 'none');
	$('#secondChoice').css('display', 'none');
	$('#thirdChoice').css('display', 'none');
	$('#thirdChoiceLabel').css('display', 'none');
	$('#choiceError').css('display', 'none');
}

/**
 * Decide what items to load based on user input, show fields
 */
function loadSecondAndThirdChoice() {
	var chosenFirstValue = $('#firstChoice').val();

	var secondChoiceLabel = $('#secondChoiceLabel');
	var thirdChoiceLabel = $('#thirdChoiceLabel');
	var secondChoice = $('#secondChoice');
	var thirdChoice = $('#thirdChoice');

	if (chosenFirstValue === 'corral') {
		secondChoiceLabel.css('display', '');
		secondChoiceLabel.text('Slime type:');
		thirdChoiceLabel.css('display', '');
		thirdChoiceLabel.text('Second slime type: (if you intend to keep largos in here)');
		secondChoice.css('display', '');
		thirdChoice.css('display', '');
		updateOptions(chosenFirstValue, secondChoice);
		updateOptions(chosenFirstValue, thirdChoice);
	} else if (chosenFirstValue === 'garden') {
		secondChoiceLabel.css('display', '');
		secondChoiceLabel.text('Food type:');
		secondChoice.css('display', '');
		thirdChoiceLabel.css('display', 'none'); //don't know why, but it doesn't work without
		thirdChoice.css('display', 'none');
		thirdChoice.val('unselected');
		updateOptions(chosenFirstValue, secondChoice);
	} else if (chosenFirstValue === 'coop') {
		secondChoiceLabel.css('display', '');
		secondChoiceLabel.text('Meat type:');
		secondChoice.css('display', '');
		thirdChoiceLabel.css('display', 'none'); //don't know why, but it doesn't work without
		thirdChoice.css('display', 'none');
		thirdChoice.val('unselected');
		updateOptions(chosenFirstValue, secondChoice);
	} else if (chosenFirstValue === 'pond') {
		secondChoiceLabel.css('display', '');
		secondChoiceLabel.text('Slime type:');
		secondChoice.css('display', '');
		thirdChoiceLabel.css('display', 'none'); //don't know why, but it doesn't work without
		thirdChoice.css('display', 'none');
		thirdChoice.val('unselected');
		updateOptions(chosenFirstValue, secondChoice);
	} else if (chosenFirstValue === 'incinerator') {
		secondChoiceLabel.css('display', '');
		secondChoiceLabel.text('Slime type:');
		secondChoice.css('display', '');
		thirdChoiceLabel.css('display', 'none'); //don't know why, but it doesn't work without
		thirdChoice.css('display', 'none');
		thirdChoice.val('unselected');
		updateOptions(chosenFirstValue, secondChoice);
	} else {
		secondChoiceLabel.css('display', 'none'); //don't know why, but it doesn't work without
		secondChoice.css('display', 'none');
		secondChoice.val('unselected');
		thirdChoiceLabel.css('display', 'none');
		thirdChoice.css('display', 'none');
		thirdChoice.val('unselected');
	}
}

/**
 * Load items based on user input
 * @param type of items to load
 * @param selectHTML select operator which load items to
 */
function updateOptions(type, selectHTML) {
	selectHTML.find('option').remove();
	selectHTML.append($('<option>', {
		value: 'unselected',
		text : 'Empty'
	}));

	var array;

	if (type === 'corral') {
		array = slimeTypes;
	} else if (type === 'garden') {
		array = foodTypes;
	} else if (type === 'coop') {
		array = meatTypes;
	} else if (type === 'pond') {
		array = waterSlimeTypes;
	} else if (type === 'incinerator') {
		array = fireSlimeTypes;
	} else {
		array = null;
	}

	if (array !== null) {
		$.each(array, function (key, type) {
			if (typeof type === 'object') type = type.name;
			var value = type.replace(/\s/g, "-").toLowerCase();
			selectHTML.append($('<option>', {
				value: value,
				text : type
			}));
		})
	}
}

/**
 * Load correct number of items for stuff when switching to garden entries
 */
function loadNumberOfItemsForGarden() {
	var chosenFirstValue = $('#firstChoice').val();

	if (chosenFirstValue === 'garden') {
		var chosenSecondValue = $('#secondChoice').val();
		var numberOfItems = 0;

		if (chosenSecondValue !== 'unselected') {
			$.each(foodTypes, function (key, value) {
				var name = value.name.replace(/\s/g, "-").toLowerCase();
				if (name === chosenSecondValue) {
					numberOfItems = value.amount;
				}
			})
		}
		$('#numberOfItems').val(numberOfItems);
	}
}

/**
 * Unset plot
 */
function clearPlot() {
	var id = $('#editedPlotNumber').val();
	if (id !== 'unselected') {
		$.each(plots, function (key, value) {
			// noinspection EqualityComparisonWithCoercionJS
			if (value.id == id) {
				value.occupied = false;
				value.type = null;
				value.firstItem = null;
				value.secondItem = null;
				value.description = '';
				value.numberOfItems = 0;
			}
		});
	}
	reloadSite();
	$('#setupPlot').modal('hide');
}

/**
 * Save data from form
 */
function savePlot() {
	var chosenFirstValue = $('#firstChoice').val();
	var chosenSecondValue = $('#secondChoice').val();
	var chosenThirdValue = $('#thirdChoice').val();

	var id = $('#editedPlotNumber').val();
	if (id === 'unselected') return;

	$.each(plots, function (key, value) {
		// noinspection EqualityComparisonWithCoercionJS
		if (value.id == id) {
			value.align = $('#alignChoice').val();
			value.description = $('#description').val();

			var numberOfItems = $('#numberOfItems').val();
			var numberOfItems = parseInt(numberOfItems);
			if (numberOfItems <= 0) numberOfItems = 0;
			value.numberOfItems = numberOfItems;

			if (chosenFirstValue === 'unselected') {
				value.occupied = false;
				value.type = null;
				value.firstItem = null;
				value.secondItem = null;
				value.description = null;
				value.numberOfItems = 0;
			} else if (chosenFirstValue === 'silo') {
				value.occupied = true;
				value.type = chosenFirstValue;
				value.firstItem = null;
				value.secondItem = null;
				value.numberOfItems = 0;
			} else {
				value.occupied = true;
				value.type = chosenFirstValue;
				if (chosenSecondValue === 'unselected') {
					value.firstItem = null;
					value.secondItem = null;
					value.numberOfItems = 0;
				} else {
					value.firstItem = chosenSecondValue;
					if (chosenThirdValue !== 'unselected' && chosenFirstValue === 'corral' && chosenThirdValue !== chosenSecondValue) {
						value.secondItem = chosenThirdValue;
					} else {
						value.secondItem = null;
					}
				}
			}
		}
	});
	reloadSite();
	$('#setupPlot').modal('hide');
}

//endregion

/**
 * Change z-index of big plot that mouse is already at to be on top
 */
function moveToTop() {
	$('.plotMaximized').css('z-index', 0);
	$(this).find('.plotMaximized').css('z-index', 1);
}
