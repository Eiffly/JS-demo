﻿<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>kingx的音乐盒</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="kingx，个人音乐盒">
	<meta http-equiv="description" content="这是kingx的个人音乐盒">
	
	<link href="css/main.css" rel="stylesheet" type="text/css">
	<script type="text/javascript" src="script/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="script/main.js"></script>
  </head>
  
  <body>
    
    <audio id="myAudio" src="music/music-00001.mp3" controls="true" style="display: none;"></audio>
     
    <!-- 显示音乐播放器的div -->
	<div class="mb-layout-ft minwidth">
		<div class="panel">
			<div class="panel-inner">
				<!-- 控制播放暂停上一首下一首 -->
				<div class="left-panel">
					<input type="hidden" id="curIndex" value="0">
					<ul class="play-btn">
						<li class="prev">
							<a class="wg-button" title="上一首"></a>
						</li>
						<li class="play" title="播放[空格键]">
							<a class="stop-a"></a>
						</li>
						<li class="next">
							<a class="wg-button" title="下一首"></a>
						</li>
					</ul>
				</div>
				<!-- 控制播放模式，调节声音 -->
				<div class="right-panel">
					<ul class="playmod">
						<li class="random-mod">
							<a href="javascript:;" title="随机播放" class="wg-button"></a>
						</li>
						<li class="single-mod">
							<a href="javascript:;" title="单曲循环" class="wg-button"></a>
						</li>
						<li class="list-mod">
							<a href="javascript:;" title="列表循环" class="wg-button currentMod"></a>
						</li>
					</ul>
					<div class="volume">
						<a class="mute wg-button" title="静音"></a>
						<div class="vol-slider-wrapper">
							<div class="vol-slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
								<div class="ui-slider-range ui-widget-header ui-slider-range-min ui-slider-range-volume" style="width: 100%"></div>
								<a class="ui-slider-handle ui-state-default ui-corner-all ui-volume" style="left: 100%"></a>
							</div>
						</div>
					</div>
				</div>
				<!-- 进度条和时间展示 -->
				<div class="main-panel">
					<div class="title-wrapper">
						<div class="title-inner">
							<div class="title">
								<a class="songname">不要说话</a>
								<span class="split">-</span>
								<a class="artist">陈奕迅</a>
							</div>
						</div>
					</div>
					<div class="pane">
						<div class="time">
							<span class="curTime">00:00</span>
							<span>/</span>
							<span class="totalTime">04:45</span>
						</div>
						<div class="progress-wrapper">
							<div id="progressSlider" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
								<div class="ui-slider-left"></div>
								<div class="ui-slider-right"></div>
								<div class="ui-slider-range ui-widget-header ui-slider-range-min ui-slider-range-schedule">
									<span class="ui-slider-range-inner"></span>
								</div>
								<div class="ui-slider-progressbar ui-widget-header" style="width: 100%;"></div>
								<a class="ui-slider-handle ui-state-default ui-corner-all ui-schedule">
									<span></span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  </body>
</html>
