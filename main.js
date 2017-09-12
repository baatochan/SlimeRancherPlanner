/**
 * Created by barto on 09.09.17.
 */

var desiredWidth = 1680;
var desiredHeight = 920;

var leftOffset = 0;
var topOffset = 0;

//region arrays

var defaultValuesPlots = [
	{
		'id': 1, 'leftPosition': 341, 'topPosition': 614, 'align': 'bottom-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}, {
		'id': 2, 'leftPosition': 341, 'topPosition': 655, 'align': 'top-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}, {
		'id': 3, 'leftPosition': 381, 'topPosition': 614, 'align': 'bottom-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}, {
		'id': 4, 'leftPosition': 381, 'topPosition': 655, 'align': 'top-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}, {
		'id': 5, 'leftPosition': 441, 'topPosition': 365, 'align': 'top-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}, {
		'id': 6, 'leftPosition': 489, 'topPosition': 268, 'align': 'bottom-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}, {
		'id': 7, 'leftPosition': 552, 'topPosition': 270, 'align': 'bottom-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}, {
		'id': 8, 'leftPosition': 561, 'topPosition': 363, 'align': 'top-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}, {
		'id': 9, 'leftPosition': 776, 'topPosition': 192, 'align': 'bottom-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}, {
		'id': 10, 'leftPosition': 775, 'topPosition': 232, 'align': 'top-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}, {
		'id': 11, 'leftPosition': 893, 'topPosition': 191, 'align': 'bottom-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}, {
		'id': 12, 'leftPosition': 893, 'topPosition': 232, 'align': 'top-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}, {
		'id': 13, 'leftPosition': 893, 'topPosition': 318, 'align': 'top-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}, {
		'id': 14, 'leftPosition': 934, 'topPosition': 191, 'align': 'bottom-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}, {
		'id': 15, 'leftPosition': 934, 'topPosition': 232, 'align': 'top-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}, {
		'id': 16, 'leftPosition': 934, 'topPosition': 318, 'align': 'top-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}, {
		'id': 17, 'leftPosition': 1069, 'topPosition': 595, 'align': 'bottom-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}, {
		'id': 18, 'leftPosition': 1069, 'topPosition': 648, 'align': 'top-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}, {
		'id': 19, 'leftPosition': 1108, 'topPosition': 595, 'align': 'bottom-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}, {
		'id': 20, 'leftPosition': 1108, 'topPosition': 648, 'align': 'top-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}, {
		'id': 21, 'leftPosition': 1150, 'topPosition': 708, 'align': 'top-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}, {
		'id': 22, 'leftPosition': 1152, 'topPosition': 233, 'align': 'bottom-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}, {
		'id': 23, 'leftPosition': 1167, 'topPosition': 305, 'align': 'top-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}, {
		'id': 24, 'leftPosition': 1218, 'topPosition': 222, 'align': 'bottom-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}, {
		'id': 25, 'leftPosition': 1262, 'topPosition': 248, 'align': 'top-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}, {
		'id': 26, 'leftPosition': 1258, 'topPosition': 325, 'align': 'top-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}, {
		'id': 'W', 'leftPosition': 374, 'topPosition': 570, 'align': 'bottom-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null
	}
];

var plots;

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
	'Tangle Slime'
];

var waterSlimeTypes = [
	'Puddle Slime'
];

var fireSlimeTypes = ['' +
	'Fire Slime'
];

var foodTypes = [
	'Carrot',
	'Heart Beet',
	'Oca Oca',
	'Odd Onion',
	'Silver Parsnip',
	'Pogofruit',
	'Cuberry',
	'Mint Mango',
	'Phase Lemon',
	'Prickle Pear'
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

	$('#clearPlot').click(clearPlot);

	$('#savePlot').click(savePlot);

	$('#resetLink').click(resetData);

	$('#exportLink').click(saveData);

	$('#importLink').click(openImportModal);

	$('#importDataButton').click(importDataFromText);

	$('#importDataFileInput').on('change', importDataFromFile);

	$('#exportMenu').mouseenter(moveToTop);
});

//region saveMenu

/**
 * Save plot array to file
 */
function saveData() {
	$('#downloadData').modal('show');

	var downloadLink = $('#downloadButton');
	downloadLink.attr('download', 'export.txt');
	downloadLink.attr('href', 'data:text/plain;base64,' + btoa(JSON.stringify(plots)));
}

/**
 * Open the modal with textarea for stringified data to import
 */
function openImportModal() {
	$('#importData').modal('show');
	$('#importDataTextArea').val('');
	// noinspection JSJQueryEfficiency
	$('#importDataFileInput').val('');
	$('#fileError').css('display', 'none');
	var fileSupport = checkFileReaderSupport();
	if(!fileSupport) {
		$('#importDataFileInput').css('display', 'none');
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
		reloadSite();
	}, 800);
	$('#importData').modal('hide');
}

/**
 * Reset data to factory value
 */
function resetData() {
	plots = $.extend(true, [], defaultValuesPlots); //plots = defaultValuesPlots doesn't make a copy, it points to the same array
	reloadSite();
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

	var staticBackground = false;

	if (actualWidth < 1100) {
		actualWidth = 1100;
		staticBackground = true;
	}
	if (actualHeight < 600) {
		actualHeight = 600;
		staticBackground = true;
	}

	if (staticBackground) {
		var imageWidth = 2762;
		var imageHeight = 1734;

		var imageLeftOffset = (actualWidth-imageWidth)/2;
		var imageTopOffset = (actualHeight-imageHeight)/2;

		$(document.body).css('background-position', imageLeftOffset + 'px ' + imageTopOffset + 'px');
	} else {
		$(document.body).css('background-position', 'center center');
	}

	leftOffset = (actualWidth-desiredWidth)/2;
	topOffset = (actualHeight-desiredHeight)/2;

	$(document.body).css('width', actualWidth);
	$(document.body).css('height', actualHeight);
}

/**
 * Create (or update) HTML for small plots
 */
function showPlots() {
	var plotBorder = $('.plot').css('border-width');
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
	var plotBorder = $('.plotMaximized').css('border-width');
	plotBorder = plotBorder.slice(0, -2);
	plotBorder = parseInt(plotBorder);
	var plotTemplate = $('#plotMaximizedTemplate');

	$.each(plots, function (key, value) {
		var plot = $('#plotMaximizedA-' + value.id);
		if(value.occupied) {
			if (plot.length === 0) {
				plot = plotTemplate.clone();
				plot.attr('id', 'plotMaximizedA-' + value.id);
				plot.css('z-index', 0);
				plotTemplate.after(plot);
			}
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
				plot.find('.plotContent').empty();
				plot.find('.plotContent').append($('<img>', {
					src: 'img/plotItems/' + value.firstItem + '.png',
					alt: value.firstItem
				}));
				plot.find('.plotContent').css('display', 'flex');
			} else {
				plot.find('.corralContent').css('display', 'none');
				plot.find('.plotContent').css('display', 'none');
			}
		} else {
			plot.css('display', 'none');
			$('#plotA-' + value.id).css('display', 'block');
		}
	});

	var allMaximizedPlots = $('[id^="plotMaximizedA-"]');
	allMaximizedPlots.click(openEditForm);
	allMaximizedPlots.mouseenter(moveToTop);
}

//endregion

//region setupAndEditForm

/**
 * Open form for setting up small plot
 */
function openSetUpForm() {
	$('#setupPlot').modal('show');
	refreshForm();
	var id = $(this).attr('id');
	id = id.slice(6);
	$('#editedPlotNumber').val(id);
	if (id === 'W') {
		$('#setupPlotNumber').text('- waterfall');
	} else {
		$('#setupPlotNumber').text(id);
	}
	$.each(plots, function (key, value) {
		// noinspection EqualityComparisonWithCoercionJS
		if (value.id == id) {
			$('#alignChoice').val(value.align);
		}
	});
}

/**
 * Open form for editing set plot (big)
 */
function openEditForm() {
	$('#setupPlot').modal('show');
	refreshForm();
	var id = $(this).attr('id');
	id = id.slice(15);
	$('#editedPlotNumber').val(id);
	if (id === 'W') {
		$('#setupPlotNumber').text('- waterfall');
	} else {
		$('#setupPlotNumber').text(id);
	}

	var firstChoice = $('#firstChoice');
	var secondChoice = $('#secondChoice');
	var thirdChoice = $('#thirdChoice');

	$.each(plots, function (key, value) {
		// noinspection EqualityComparisonWithCoercionJS
		if (value.id == id) {
			$('#alignChoice').val(value.align);
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
			var value = type.replace(/\s/g, "-").toLowerCase();
			selectHTML.append($('<option>', {
				value: value,
				text : type
			}));
		})
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
			if (chosenFirstValue === 'unselected') {
				value.occupied = false;
				value.type = null;
				value.firstItem = null;
				value.secondItem = null;
			} else if (chosenFirstValue === 'silo') {
				value.occupied = true;
				value.type = chosenFirstValue;
				value.firstItem = null;
				value.secondItem = null;
			} else {
				value.occupied = true;
				value.type = chosenFirstValue;
				if (chosenSecondValue === 'unselected') {
					value.firstItem = null;
					value.secondItem = null;
				} else {
					value.firstItem = chosenSecondValue;
					if (chosenThirdValue !== 'unselected' && chosenFirstValue === 'corral') value.secondItem = chosenThirdValue;
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
