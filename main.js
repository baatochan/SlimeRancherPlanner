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

$(document).ready(function (e) {
	calculateBodySize();
	showPlots();
	showMiximizedPlots();

	$(window).resize(reloadSite);

	$('[id^="plotA-"]').click(function (e) {
		$('#setupPlot').modal('show');
		var id = $(this).attr('id');
		id = id.slice(6);
		if (id === 'W') {
			$('#setupPlotNumber').text('- waterfall');
		} else {
			$('#setupPlotNumber').text(id);
		}
	});

	$('#firstChoice').change(function () {
		// TODO!
	});
});

function reloadSite() {
	calculateBodySize();
	showPlots();
	showMiximizedPlots()
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
	$('[id^="plotA-"]').remove();

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

function showMiximizedPlots() {
	$('[id^="plotMaximizedA-"]').remove();

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
			console.log(plotSize);
			console.log(plotMaximizedSize);
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
			console.log(leftAlignOffset);
			console.log(topAlignOffset);
			var leftPosition = value.leftPosition + leftOffset + leftAlignOffset - plotBorder;
			var topPosition = value.topPosition + topOffset + topAlignOffset - plotBorder;
			plot.find('.plotMaximized').css('left', leftPosition + 'px');
			plot.find('.plotMaximized').css('top', topPosition + 'px');
			plotTemplate.after(plot);
		}
	});
}
