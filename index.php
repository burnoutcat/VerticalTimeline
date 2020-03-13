<?php 

require_once "assets/data.php";

$filename = "assets/content.json";
$data = get_json($filename);

 ?><!DOCTYPE html>
<html lang="en">
<head>

	<meta charset="UTF-8">
	<title>History of Sans-Serif</title>

	<img src="" alt="">

	<?php include "assets/elements/property.php" ?> 

</head>
<body>

	<div class="mainwindow"> <!-- Scrolling Event Listener -->
		<div class="slide-wrapper">

		<?php 

		foreach ($data->webcontent as $content) {
			echo "
			<section class='fullpage-slide' id='$content->id'>
				<div class='title-container'>
					<h2>$content->year</h2>
					<h1>$content->title</h1>
				</div>
				<div class='detail-container display-flex flex-align-center'>
					<div class='detail-text flex-stretch'>
						<p>$content->content</p>
					</div>
					<div class='detail-image flex-stretch align-center'>
						<img src='assets/images/$content->image' class='media-image'>
					</div>		
				</div>
			</section>
			";
		}

		 ?>
	 	</div>
	</div>

	<div class="timeline-controll">
		<ul>
			<li class="control" id="control-1">START</li>
			<li class="control" id="control-2">1816</li>
			<li class="control" id="control-3">1896</li>
			<li class="control" id="control-4">1909</li>
			<li class="control" id="control-5">1926</li>
			<li class="control" id="control-6">1927</li>
			<li class="control" id="control-7">1957</li>
			<li class="control" id="control-8">1957</li>
			<li class="control" id="control-9">1988</li>
			<li class="control" id="control-10">2000</li>
		</ul>
	</div>


	
</body>
</html>