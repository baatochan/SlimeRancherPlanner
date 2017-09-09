/**
 * Created by barto on 09.09.17.
 */

var plots = [
	{
		'id': 1, 'leftPosition': 341, 'topPosition': 614
	}, {
		'id': 2, 'leftPosition': 341, 'topPosition': 655
	}, {
		'id': 3, 'leftPosition': 381, 'topPosition': 614
	}, {
		'id': 4, 'leftPosition': 381, 'topPosition': 655
	}, {
		'id': 5, 'leftPosition': 441, 'topPosition': 365
	}, {
		'id': 6, 'leftPosition': 489, 'topPosition': 268
	}, {
		'id': 7, 'leftPosition': 552, 'topPosition': 270
	}, {
		'id': 8, 'leftPosition': 561, 'topPosition': 363
	}, {
		'id': 9, 'leftPosition': 776, 'topPosition': 192
	}, {
		'id': 10, 'leftPosition': 775, 'topPosition': 232
	}, {
		'id': 11, 'leftPosition': 893, 'topPosition': 191
	}, {
		'id': 12, 'leftPosition': 893, 'topPosition': 232
	}, {
		'id': 13, 'leftPosition': 893, 'topPosition': 318
	}, {
		'id': 14, 'leftPosition': 934, 'topPosition': 191
	}, {
		'id': 15, 'leftPosition': 934, 'topPosition': 232
	}, {
		'id': 16, 'leftPosition': 934, 'topPosition': 318
	}, {
		'id': 17, 'leftPosition': 1069, 'topPosition': 595
	}, {
		'id': 18, 'leftPosition': 1069, 'topPosition': 648
	}, {
		'id': 19, 'leftPosition': 1108, 'topPosition': 595
	}, {
		'id': 20, 'leftPosition': 1108, 'topPosition': 648
	}, {
		'id': 21, 'leftPosition': 1150, 'topPosition': 708
	}, {
		'id': 22, 'leftPosition': 1152, 'topPosition': 233
	}, {
		'id': 23, 'leftPosition': 1167, 'topPosition': 305
	}, {
		'id': 24, 'leftPosition': 1218, 'topPosition': 222
	}, {
		'id': 25, 'leftPosition': 1262, 'topPosition': 248
	}, {
		'id': 26, 'leftPosition': 1258, 'topPosition': 325
	}
];

var waterfallPond = {'id': 27, 'leftPosition': 374, 'topPosition': 570};

$(document).ready(function (e) {
	showPlots();
});

function showPlots() {
	$('[id^="plotA-"]').remove();

	var plotBorder = $('.plot').css('border-width');
	console.log(plotBorder);
	plotBorder = plotBorder.slice(0, -2);
	plotBorder = parseInt(plotBorder);
	var numberOfPlots = 0;

	$.each(plots, (key, value) => {
		var plot = $('#plotTemplate').clone();
		plot.attr('id', 'plotA-' + value.id);
		plot.css('display', '');
		plot.css('z-index', 0);
		plot.find('.plot').attr('id', 'plot-' + value.id);
		var leftPosition = value.leftPosition - plotBorder;
		var topPosition = value.topPosition - plotBorder;
		plot.find('.plot').css('left', leftPosition + 'px');
		plot.find('.plot').css('top', topPosition + 'px');
		plot.find('.plotNumber').text(value.id);
		numberOfPlots = value.id;
		$('#plotTemplate').after(plot);
	});

	var waterfallHTML = $('#plotTemplate').clone();
	numberOfPlots++;
	waterfallHTML.attr('id', 'plotA-' + numberOfPlots);
	waterfallHTML.css('display', '');
	waterfallHTML.css('z-index', 0);
	waterfallHTML.find('.plot').attr('id', 'waterfall'); //BE CAREFULL IN FUTURE
	var leftPosition = waterfallPond.leftPosition - plotBorder;
	var topPosition = waterfallPond.topPosition - plotBorder;
	waterfallHTML.find('.plot').css('left', leftPosition + 'px');
	waterfallHTML.find('.plot').css('top', topPosition + 'px');
	waterfallHTML.find('.plotNumber').text('W');
	$('#plotTemplate').after(waterfallHTML);
}