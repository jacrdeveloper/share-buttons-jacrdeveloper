/*!
* Nombre del Proyecto: Share Buttons by Jacrdeveloper
* Versión: 1.0.0
* Autor: Grd92 - Iván Garrido López
* Licencia: Creative Commons Atribución-CompartirIgual 4.0 Internacional (CC BY-SA 4.0)
* Enlace de la Licencia: https://creativecommons.org/licenses/by-sa/4.0/
* GitHub: https://github.com/jacrdeveloper/share-buttons-jacrdeveloper
*/
class SocialShareMenu extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		let shadowRoot = this.attachShadow({ mode: "open" });
		let innerShareHtml = '';

		const toBool = (value) => {
			try {
				return JSON.parse(value)
			} catch (error) { }
			return true;
		}
		const checkFalse = (value) => toBool(value) === false;
		const checkProp = (value) => value in this.dataset && checkFalse(this.dataset[value]);
		const addShareButton = (value) => innerShareHtml = innerShareHtml + shareHtml[value];

		const urlToShare = window.location.href;
		const titleToShare = document.title;

		console.log(urlToShare)
		console.log(titleToShare)

		const shareText = titleToShare + ' ' + urlToShare;
		const shareHtml = Object.freeze({
			facebook: `<div class="social-icon facebook"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg></div>`,
			twitter: `<div class="social-icon twitter"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/></svg></div>`,
			linkedin: `<div class="social-icon linkedin"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg></div>`,
			whatsapp: `<div class="social-icon whatsapp"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg></div>`,
			reddit: `<div class="social-icon reddit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reddit" viewBox="0 0 16 16"><path d="M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z"/><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.203.203 0 0 0-.153.028.186.186 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z"/></svg></div>`,
			envelope: `<div class="social-icon envelope"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg></div>`,
			pinterest: `<div class="social-icon pinterest"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pinterest" viewBox="0 0 16 16"><path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/></svg></div>`,
			copyLink: `<div class="social-icon clipboard"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg></div>`,
			print: `<div class="social-icon print"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16"><path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/><path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/></svg></div>`,
		});
		const shareLinks = Object.freeze({
			facebook: `https://www.facebook.com/sharer/sharer.php?href=${encodeURIComponent(urlToShare)}`,
			twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`,
			linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(urlToShare)}`,
			whatsapp: `https://web.whatsapp.com/send?text=${encodeURIComponent(shareText)}`,
			reddit: `https://www.reddit.com/submit?title=${encodeURIComponent(titleToShare)}&url=${encodeURIComponent(urlToShare)}`,
			envelope: `mailto:?Subject=${encodeURIComponent(shareText)}`,
			pinterest: `https://www.pinterest.es/pin/create/button/?description=${encodeURIComponent(titleToShare)}&media=${encodeURIComponent("https://www.jacrdeveloper.es/images/logo.png")}&url=${encodeURIComponent(urlToShare)}`,
		});

		const shareEvent = (evt) => {
			const by = evt.currentTarget.className.split(' ').find(it => it !== 'social-icon');
			const open = (url) => window.open(url);
			const shareEvents = Object.freeze({
				facebook: open,
				twitter: open,
				linkedin: open,
				whatsapp: open,
				reddit: open,
				envelope: open,
				pinterest: open,
				clipboard: () => {
					navigator.clipboard.writeText(urlToShare).then(function () {
						alert('Enlace copiado al portapapeles');
					}).catch(function () {
						alert('No se pudo copiar el enlace');
					})
				},
				print: () => {
					window.print()
				},
			});
			shareEvents[by](shareLinks[by])
		};

		if (!checkProp('facebook')) addShareButton('facebook');
		if (!checkProp('twitter')) addShareButton('twitter');
		if (!checkProp('whatsapp')) addShareButton('whatsapp');
		if (!checkProp('linkedin')) addShareButton('linkedin');
		if (!checkProp('reddit')) addShareButton('reddit');
		if (!checkProp('pinterest')) addShareButton('pinterest');
		if (!checkProp('copyLink')) addShareButton('copyLink');
		if (!checkProp('envelope')) addShareButton('envelope');
		if (!checkProp('print')) addShareButton('print');

		// fill innerHTML
		shadowRoot.innerHTML = `
		<style>
			#socialShareMenu {
				position: fixed;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				z-index: 9999;
				flex-direction: column;
				display: flex;
				border-radius: 0 5px 5px 0;
				border: 3px solid #212529;
			}
			
			.social-icon {
				padding: 10px;
				cursor: pointer;
				border: 1px solid #212529;
			}
			
			.social-icon svg {
				color: #ffffff;
					font-weight: bolder;
					font-size: 20px;
			}
			
			/* Cambio a horizontal para resoluciones bajas */
			@media (max-width: 768px) {
				#socialShareMenu {
				top: auto;
				bottom: 20px;
				left: 10px;
				transform: none;
				flex-direction: row;
				}
				
				.social-icon {
					padding: 5px !important;
				}
			}
			
			.social-icon.facebook {
				background-color: #385898 !important;
			}
			
			.social-icon.twitter {
				background-color: rgb(39, 44, 48) !important;
			}
			
			.social-icon.whatsapp {
				background-color: #25d366 !important;
			}
			
			.social-icon.linkedin {
				background-color: #0a66c2 !important;
			}
			
			.social-icon.reddit {
				background-color: #D93A00 !important;
			}
			
			.social-icon.pinterest {
				background-color: #e60023 !important;
			}
			
			.social-icon.clipboard {
				background-color: #aaaaaa !important;
			}
			
			.social-icon.envelope {
				background-color: #aaaaaa !important;
			}
			
			.social-icon.print {
				background-color: #aaaaaa !important;
			}
			
			
			.social-icon.clipboard svg,  .social-icon.envelope svg, .social-icon.print svg{
				color:#ffffff !important;
			}
		</style>
		<div id="socialShareMenu" class="bg-dark">${innerShareHtml}</div>
		`;

		// Add event click
		Array.from(shadowRoot.querySelectorAll('.social-icon')).forEach(function (element) {
			element.addEventListener('click', shareEvent);
		});
	}
}

window.customElements.define("social-share-menu", SocialShareMenu);
