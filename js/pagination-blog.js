$('#paginationDoctor').pagination({
	dataSource: [
		{
			'img': 't.jpg',
			'name': 'Book 1',
			'author': 'Ibad Asadov',
			'url': '#'
            },
		{
			'img': 't.jpg',
			'name': 'Book 2',
			'author': 'Ibad Asadov',
			'url': '#'
            },
		{
			'img': 't.jpg',
			'name': 'Book 3',
			'author': 'Ibad Asadov',
			'url': '#'
            },
		{
			'img': 't.jpg',
			'name': 'Book 1',
			'author': 'Ibad Asadov',
			'url': '#'
            },
		{
			'img': 't.jpg',
			'name': 'Book 2',
			'author': 'Ibad Asadov',
			'url': '#'
            },
		{
			'img': 't.jpg',
			'name': 'Book 3',
			'author': 'Ibad Asadov',
			'url': '#'
            },
		{
			'img': 't.jpg',
			'name': 'Book 4',
			'author': 'Ibad Asadov',
			'url': '#'
            },
		{
			'img': 't.jpg',
			'name': 'Book 5',
			'author': 'Ibad Asadov',
			'url': '#'
            },
		{
			'img': 't.jpg',
			'name': 'Book 1',
			'author': 'Ibad Asadov',
			'url': '#'
            },
		{
			'img': 't.jpg',
			'name': 'Book 2',
			'author': 'Ibad Asadov',
			'url': '#'
            },
		{
			'img': 't.jpg',
			'name': 'Book 3',
			'author': 'Ibad Asadov',
			'url': '#'
            },
		{
			'img': 't.jpg',
			'name': 'Book 4',
			'author': 'Ibad Asadov',
			'url': '#'
            },
		{
			'img': 't.jpg',
			'name': 'Book 5',
			'author': 'Ibad Asadov',
			'url': '#'
            },
		{
			'img': 't.jpg',
			'name': 'Book 1',
			'author': 'Ibad Asadov',
			'url': '#'
            },
		{
			'img': 't.jpg',
			'name': 'Book 2',
			'author': 'Ibad Asadov',
			'url': '#'
            },
		{
			'img': 't.jpg',
			'name': 'Book 3',
			'author': 'Ibad Asadov',
			'url': '#'
            },
		{
			'img': 't.jpg',
			'name': 'Book 4',
			'author': 'Ibad Asadov',
			'url': '#'
            },
		{
			'img': 't.jpg',
			'name': 'Book 2',
			'author': 'Ibad Asadov',
			'url': '#'
            },
		{
			'img': 't.jpg',
			'name': 'Book 3',
			'author': 'Ibad Asadov',
			'url': '#'
            },
		{
			'img': 't.jpg',
			'name': 'Book 4',
			'author': 'Ibad Asadov',
			'url': '#'
            },
		{
			'img': 't.jpg',
			'name': 'Book 5',
			'author': 'Ibad Asadov',
			'url': '#'
            }
            ],
	pageSize: 12,
	//          showPageNumbers: false,
	nextText: '<span><i class="fas fa-angle-right"></i></span>',
	prevText: '<span><i class="fas fa-angle-left"></i></span>',
	ulClassName: 'next-prev',
	activeClassName: 'active-pagination',
	callback: function (data, pagination) {
		$('.paginationDoctor').html('');
		let html = '<div class="row mt-3">';
		let blogItem = 1;
		$.each(data, function (index, item) {
			if (blogItem == 7) {
				html += `
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="banner-img">
						<a href="#"><img src="img/03_closeup.png" alt=""></a>
					</div>
				</div>
			</div>
		</div>`
			}

			html += `
                   <div class="col-lg-4 col-sm-6 col-md-6 col-12">
					<div class="blog-box">
						<img src="img/Rectangle 2151.png" alt="">
						<h5>Blog Name</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente numquam aspernatur voluptas modi aliquam cumque incidunt reiciendis molestiae, illo fugiat blanditiis id odit veniam voluptatum harum excepturi, a beatae nostrum?</p>
						<div class="blog-link">
							<a href="blog-detail.html">Get more info</a>
						</div>

					</div>
				</div>
                   
                    `;
			++blogItem;

		});
		html += '</div>';

		$('.paginationDoctor').html(html);
	}
});
