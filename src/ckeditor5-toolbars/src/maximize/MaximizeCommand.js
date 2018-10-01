
import Command from '@ckeditor/ckeditor5-core/src/command';

export default class MaximizeCommand extends Command {

	constructor(editor, view) {
		super(editor );
		this.editor=editor;		
		this.view=view;
	}
	execute( options = {} ) {

		if(this.editor.sourceElement.nextSibling.classList.contains("ckeditorfullsize"))
			{
				this.view.element.classList.remove("ck-on");
				this.view.element.classList.add("ck-off");
				this.editor.sourceElement.nextSibling.classList.remove("ckeditorfullsize");
				this.editor.sourceElement.nextSibling.style="";
				this.editor.sourceElement.nextSibling.children[2].children[0].style="";
			}
			else
			{
				this.view.element.classList.remove("ck-off");
				this.view.element.classList.add("ck-on");
				this.editor.sourceElement.nextSibling.classList.add("ckeditorfullsize");
				 var heightvalue = window.innerHeight - editor.sourceElement.nextSibling.children[1].offsetHeight - 2;
				 var stylevalue= "height: " + heightvalue + "px;";
				 var fullstyle="display: block; z-index: 999; position: absolute; left: 0px; top: 0px; width: " +  window.innerWidth + "px;";
				 this.editor.sourceElement.nextSibling.style=fullstyle;
				 this.editor.sourceElement.nextSibling.children[2].children[0].style=stylevalue;
			}
	}
}