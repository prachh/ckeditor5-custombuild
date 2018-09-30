
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import MaximizeEditing from './maximize/maximizeediting';
import MaximizeUI from './maximize/maximizeui';

export default class Maximize extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ MaximizeEditing, MaximizeUI ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'Maximize';
	}
}
