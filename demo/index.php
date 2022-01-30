<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Deneme</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
	<?php
	
		if(isset($_POST['calculate'])) {
			$num1 = (float)$_POST['num1'];
			$num2 = (float)$_POST['num2'];
			$num3 = (float)$_POST['num3'];


		}
	
		class Hesapla{
			public function sonuc1(float $num1, float $num2){
				$sonuc1 = $num1 * $num2;
				return $sonuc1;
			}

			public function sonuc2(float $num1, float $num3){
				$sonuc2 = $num1 * $num3;
				return $sonuc2;
			}

		}
	?>

    	<div class="content">
    		<div class="container">
    				<div class="row">
    						<div class="col-4">
	    								  <form method="post" action="">
											<div class="mb-3">
												<label for="formGroupExampleInput" class="form-label">Sayı 1</label>
												<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" name="num1">
											</div>
											<div class="mb-3">
												<label for="formGroupExampleInput2" class="form-label">Sayı 2</label>
												<input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" name="num2">
											</div>
											<div class="mb-3">
												<label for="formGroupExampleInput2" class="form-label">Sayı 3</label>
												<input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" name="num3">
											</div>

											<div class="mb-3">
					    						<button type="submit" name="calculate" class="btn btn-primary">Hesapla</button>
					  						</div>
					   					</form>
    						</div>

    						<div class="col-8">
    								<table class="table">
									  <thead>
									    <tr>
									      <th scope="col">#</th>
									      <th scope="col">1. Sonuç</th>
									      <th scope="col">2. Sonuç</th>
									      <th scope="col">3. Sonuç</th>
									    </tr>
									  </thead>
									  <tbody>
									    <tr>
									      <th scope="row">1</th>
									      <td>
										      	<?php 
										      	$hesap = new Hesapla();
										      	$birinciSonuc = $hesap->sonuc1($num1, $num2);
										      	echo $birinciSonuc;
										  		?>	
									  		</td>
									      <td>
										      	<?php 
										      	$hesap = new Hesapla();
										      	$ikinciSonuc = $hesap->sonuc2($num1,$num3);
										      	echo $ikinciSonuc;
										  		?>
										  			
										  </td>
									      <td>
										      	<?php
										      	function sonuc3(float $ikinciSonuc, float $birinciSonuc){
													$sonuc3 = $ikinciSonuc * $birinciSonuc;
													echo $sonuc3;
												}

												sonuc3((float)$ikinciSonuc, (float)$birinciSonuc);
										  		?>
										  			
										  		</td>
									    </tr>
									  
									  </tbody>
									</table>
    						</div>
    				</div>
    		</div>
    	</div>

		





	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
</body>
</html>