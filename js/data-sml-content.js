const doc = SML.SmlDocument.parse(`
SmlPage
	Children
		Section
			Class inverted
			Children
				Div
					Class headline-1
					Text "SML - The Simple Markup Language"
				End
				Div
					Class container
                    Children
                        p
                            Text "The Simple Markup Language is an easy and fast to type markup language. It only uses a minimal set of special characters and therefor feels very natural. It is line-based, and if you are a touch typist you will love it."
                        End
                        p
                            Text "SML was specifically designed to be understandable for even non-computer experts. It is human-friendly, while also being machine-friendly. It has multi-language support and offers a 100% reliable encoding and decoding."
                        End
                        p
                            Text "SML is a lightweight markup language but still powerful and flexible. It is meant to be an alternative for XML, JSON and YAML."
                        End
                        p
                            Text "It is especially suited for hierarchical data, but can also nest tabular data with ease. Through its support for comments and whitespace-preserving loading and saving techniques, it is the number one choice for configuration files. But it's not limited to that."
                        End
                    End
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
