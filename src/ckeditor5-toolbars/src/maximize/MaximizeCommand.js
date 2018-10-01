
import Command from '@ckeditor/ckeditor5-core/src/command';

export default class MaximizeCommand extends Command {

	constructor(editor, view) {
		super(editor );

		this.view=view;
	}
	execute( options = {} ) {

		if(editor.sourceElement.nextSibling.classList.contains("ckeditorfullsize"))
			{
				this.view.element.classList.remove("ck-on");
				this.view.element.classList.add("ck-off");
				editor.sourceElement.nextSibling.classList.remove("ckeditorfullsize");
				editor.sourceElement.nextSibling.style="";
				editor.sourceElement.nextSibling.children[2].children[0].style="";
			}
			else
			{
				this.view.element.classList.remove("ck-off");
				this.view.element.classList.add("ck-on");
				 editor.sourceElement.nextSibling.classList.add("ckeditorfullsize");
				 var heightvalue = window.innerHeight - editor.sourceElement.nextSibling.children[1].offsetHeight - 2;
				 var stylevalue= "height: " + heightvalue + "px;";
				 var fullstyle="display: block; z-index: 999; position: absolute; left: 0px; top: 0px; width: " +  window.innerWidth + "px;";
				 editor.sourceElement.nextSibling.style=fullstyle;
				 editor.sourceElement.nextSibling.children[2].children[0].style=stylevalue;
			}
	}
}