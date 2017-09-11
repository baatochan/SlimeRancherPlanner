/**
 * Created by barto on 09.09.17.
 */

var desiredWidth = 1680;
var desiredHeight = 920;

var leftOffset = 0;
var topOffset = 0;

var plots = [
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

var slimeTypes = [
	'Pink Slime',
	'Rock Slime',
	'Tabby Slime',
	'Phosphor Slime',
	'Rad Slime',
	'Honey Slime',
	'Boom Slime',
	'Puddle Slime',
	'Fire Slime',
	'Crystal Slime',
	'Quantum Slime',
	'Hunter Slime',
	'Mosaic Slime',
	'Dervish Slime',
	'Tangle Slime'
];

var foodTypes = [
	'Carrot',
	'Heart Beet',
	'Oca Oca',
	'Odd Onion',
	'Silver Parsnip',
	'Gilded Ginger',
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

$(document).ready(function () {
	calculateBodySize();
	showPlots();
	showMaximizedPlots();

	$(window).resize(reloadSite);

	$('[id^="plotA-"]').click(openForm);

	$('#firstChoice').change(loadSecondAndThirdChoice);

	$('#clearPlot').click(clearPlot);

	$('#savePlot').click(savePlot);
});

function savePlot() {
	var chosenFirstValue = $('#firstChoice').val();
	var chosenSecondValue = $('#secondChoice').val();
	var chosenThirdValue = $('#thirdChoice').val();
	var valuesCorrect = false;

	//check if values are corrected
	if ((chosenFirstValue === 'corral' || chosenFirstValue === 'garden' || chosenFirstValue === 'coop') && chosenSecondValue !== 'unselected') {
		valuesCorrect = true;
	} else if (chosenFirstValue !== 'unselected' && chosenFirstValue !== 'corral' && chosenFirstValue !== 'garden' && chosenFirstValue !== 'coop') {
		valuesCorrect = true;
	}

	var id = $('#editedPlotNumber').val();
	if (id === 'unselected') valuesCorrect = false;

	if (valuesCorrect) {
		$.each(plots, function (key, value) {
			// noinspection EqualityComparisonWithCoercionJS
			if (value.id == id) {
				value.occupied = true;
				value.type = chosenFirstValue;
				if (chosenFirstValue === 'corral' || chosenFirstValue === 'garden' || chosenFirstValue === 'coop') {
					value.firstItem = chosenSecondValue;
					if (chosenFirstValue === 'corral' && chosenThirdValue !== 'unselected') {
						value.secondItem = chosenThirdValue;
					}
				}
			}
		});
		//showPlots();
		showMaximizedPlots();
		$('#setupPlot').modal('hide');
		return;
	}

	$('#choiceError').css('display', 'block');
}

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
	$('#setupPlot').modal('hide');
}

function openForm() {
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
}

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
		updateOptions('slimes', secondChoice);
		updateOptions('slimes', thirdChoice);
	} else if (chosenFirstValue === 'garden') {
		secondChoiceLabel.css('display', '');
		secondChoiceLabel.text('Food type:');
		secondChoice.css('display', '');
		thirdChoiceLabel.css('display', 'none'); //don't know why, but it doesn't work without
		thirdChoice.css('display', 'none');
		thirdChoice.val('unselected');
		updateOptions('food', secondChoice);
	} else if (chosenFirstValue === 'coop') {
		secondChoiceLabel.css('display', '');
		secondChoiceLabel.text('Meat type:');
		secondChoice.css('display', '');
		thirdChoiceLabel.css('display', 'none'); //don't know why, but it doesn't work without
		thirdChoice.css('display', 'none');
		thirdChoice.val('unselected');
		updateOptions('meat', secondChoice);
	} else {
		secondChoiceLabel.css('display', 'none'); //don't know why, but it doesn't work without
		secondChoice.css('display', 'none');
		secondChoice.val('unselected');
		thirdChoiceLabel.css('display', 'none');
		thirdChoice.css('display', 'none');
		thirdChoice.val('unselected');
	}
}

function updateOptions(type, selectHTML) {
	selectHTML.find('option').remove();
	selectHTML.append($('<option>', {
		value: 'unselected',
		text : 'Select type'
	}));

	var array;

	if (type === 'slimes') {
		array = slimeTypes;
	} else if (type === 'food') {
		array = foodTypes;
	} else if (type === 'meat') {
		array = meatTypes;
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

function refreshForm() {
	$('#firstChoice').val('unselected');
	$('#secondChoiceLabel').css('display', 'none');
	$('#secondChoice').css('display', 'none');
	$('#thirdChoice').css('display', 'none');
	$('#thirdChoiceLabel').css('display', 'none');
	$('#choiceError').css('display', 'none');
}

function reloadSite() {
	calculateBodySize();
	showPlots();
	showMaximizedPlots()
}

function calculateBodySize() {
	var actualWidth = window.innerWidth;
	var actualHeight = window.innerHeight;

	leftOffset = (actualWidth-desiredWidth)/2;
	topOffset = (actualHeight-desiredHeight)/2;

	$(document.body).css('width', actualWidth);
	$(document.body).css('height', actualHeight);
}

function showPlots() {
	$('[id^="plotA-"]').remove(); //TODO: BREAKS EVENT LISTENER

	var plotBorder = $('.plot').css('border-width');
	plotBorder = plotBorder.slice(0, -2);
	plotBorder = parseInt(plotBorder);
	var plotTemplate = $('#plotTemplate');


	$.each(plots, function (key, value) {
		var plot = plotTemplate.clone();
		plot.attr('id', 'plotA-' + value.id);
		plot.css('display', '');
		plot.css('z-index', 0);
		plot.find('.plot').attr('id', 'plot-' + value.id);
		var leftPosition = value.leftPosition + leftOffset - plotBorder;
		var topPosition = value.topPosition + topOffset - plotBorder;
		plot.find('.plot').css('left', leftPosition + 'px');
		plot.find('.plot').css('top', topPosition + 'px');
		plot.find('.plotNumber').text(value.id);
		plotTemplate.after(plot);
	});
}

function showMaximizedPlots() {
	$('[id^="plotMaximizedA-"]').remove(); //TODO: BREAKS EVENT LISTENER

	var plotBorder = $('.plotMaximized').css('border-width');
	plotBorder = plotBorder.slice(0, -2);
	plotBorder = parseInt(plotBorder);
	var plotTemplate = $('#plotMaximizedTemplate');

	$.each(plots, function (key, value) {
		if(value.occupied) {
			$('#plotA-' + value.id).css('display', 'none');
			var plot = plotTemplate.clone();
			plot.attr('id', 'plotMaximizedA-' + value.id);
			plot.css('display', '');
			plot.css('z-index', 0);
			plot.find('.plotMaximized').attr('id', 'plotMaximized-' + value.id);
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
			plot.find('.plotMaximized').addClass(value.type);
			plotTemplate.after(plot);
		}
	});
}
