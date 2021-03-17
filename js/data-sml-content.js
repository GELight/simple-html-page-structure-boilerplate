const doc = SML.SmlDocument.parse(`
SmlPage
	Children
		Section
			Class inverted
			Children
				Div
					Class headline-1
					Text "Language Support"
				End
				Div
					Class container
					Text "Lorem ipsum dolor sit amet, consetetur <a>sadipscing elitr, sed diam nonumy</a> eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur <a>sadipscing elitr</a>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero <a>eos et accusam</a> et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
				End
			End
		End
		Section
			Class container
			Children
				Iframe
					height 400
					style "width: 100%;"
					scrolling no
					src https://codepen.io/gelight/embed/YzpRgxL?height=265&amp;theme-id=dark&amp;default-tab=js,result
					frameborder no
					loading lazy
					allowtransparency true
					allowfullscreen true
				End
			End
		End
	End
End
`);

new SmlHtmlBuilder(doc).mount("[data-sml-content]");
