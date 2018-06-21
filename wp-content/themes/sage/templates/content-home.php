<section class="view-gallery" id="single-page">
<section id="single-gallery" class="swiper-container-horizontal swiper-container-free-mode" style="cursor: -webkit-grab;">
<?php if( have_rows('slider_items') ): ?>
<div class="slider-for">
<?php while( have_rows('slider_items') ): the_row();
      // vars 
      $image = get_sub_field('image');
      $link = get_sub_field('project_url');

      ?>
            <div class="slick-container">
            <img src="<?php echo  $image; ?>" />
            <figcaption class="image-caption"><a href="<?=$link?>">View Project</a></figcaption>

<div class="slide-count-wrap">
         <span class="current"></span> of
         <span class="total"></span>
      </div>

            </div>
            <?php endwhile; ?>
</div>
<?php endif; ?>








<!--ul class="single-images swiper-wrapper" style="">
	<li class="commission swiper-slide swiper-slide-active" style="background-color:#ffffff" data-number="1">
		<figure class="">
            <img src="<?=get_template_directory_uri()?>/assets/images/screenshot.png">
            <figcaption class="image-caption">Helmut Newton Calendar</figcaption>
		</figure>
    </li>
    <li class="commission swiper-slide" style="background-color:#ffffff" data-number="1">
		<figure class="">
            <img src="<?=get_template_directory_uri()?>/assets/images/screenshot.png">
            <figcaption class="image-caption">Helmut Newton Calendar</figcaption>
		</figure>
	</li>
</ul-->
</section>
</section>