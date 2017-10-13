import { Component, EventEmitter, OnDestroy, Input, Output } from '@angular/core';
import 'tinymce';
import 'tinymce/themes/modern';
import 'tinymce/plugins/table';
import 'tinymce/plugins/link';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/autoresize';
import 'tinymce/plugins/textcolor';
import 'tinymce/plugins/colorpicker';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/textpattern';
import 'tinymce/plugins/fullpage';

declare var tinymce: any;

@Component({
    selector: 'app-tiny-editor',
    template: `<textarea id="{{elementId}}"></textarea>`
})
export class TinyEditorComponent implements OnDestroy {
    @Input() elementId: String;
    @Output() onEditorContentChange = new EventEmitter();

    editor;

    initialContent: string = "<!DOCTYPE html><html><head></head><body> <p>&nbsp;</p> <p class=\"MsoNormal\" style=\"margin-bottom: 8.0pt; line-height: 105%;\"><strong>Subdivision Specific Rules Information</strong> <br /> <br /> <strong>Safety Overlay Systems in Effect</strong><br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &bull; Positive Train Control (PTC) <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull; Hy-Rail Limits Compliance System (HLCS) <br /> <br /> <strong>GCOR/MWOR 1.14</strong>&mdash;San Joaquin Valley trains and engines may use main track between Bakersfield and Jastro, joint with BNSF trains and engines.<br /> <br /> <strong>GCOR 1.47</strong>&mdash;Passenger Trains Observe and Call Signals&mdash; When a signal requires a train to stop at or pass the next signal at restricted speed, the engineer must communicate that fact to a designated member of the crew, including track designation if on multiple tracks, and get an acknowledgment. If no acknowledgment is received, the engineer must ascertain at the next scheduled stop why the message is not being confirmed. If the engineer fails to control the train movement in accordance with either a wayside signal or other restrictions imposed upon the train, the designated crew member shall at once communicate with and caution the engineer regarding the restriction, and if necessary, take appropriate action to ensure the safety of the train, including stopping all movement if appropriate.</p> <p class=\"MsoNormal\" style=\"margin-bottom: 8.0pt; line-height: 105%;\"><br /> <strong>GCOR/MWOR 5.8.2</strong>&mdash;Sound the whistle approaching all crossings, public and private. <br /> <br /> <strong>GCOR/MWOR 6.19</strong>&mdash;When flagging is required, the distance is 2.0 miles. <br /> <br /> <strong>GCOR 9.9</strong>&mdash;All Trains Delayed Within a Block&mdash;Supplemental Instruction: In CTC, when any train stops or its speed is reduced below 10 MPH, the train must proceed at a speed not exceeding 40 MPH, prepared to stop at the next signal until the next signal is visible and that signal displays a proceed indication.</p> <p class=\"MsoNormal\"><br /> <strong>SSI Item 9, Amtrak Instructions</strong>&mdash;Supplemental Instruction: Under the subheading &ldquo;Equipment&rdquo;, the line reading &ldquo;Movement with locomotives between cars is prohibited&rdquo; is amended as follows: <br /> Movement with locomotive between cars is prohibited unless: <br /> <strong>A.</strong> Locomotive is being used in &ldquo;push-pull&rdquo; service.<br /> <strong>B.</strong> &ldquo;MU&rdquo; control cables are connected through the entire train. </p> <p><span style=\"background-color: #ffff00;\"><strong style=\"background-color: #ffffff;\">C.</strong><span style=\"background-color: #ffffff;\"> Locomotive between cars is not isolated or dead-in-tow.</span>Tewst isite askdjfol kjluowlk</span></p> <table style=\"height: 148px;\" border=\"1\" width=\"521\"> <tbody> <tr> <td style=\"width: 123px;\"><span style=\"background-color: #ffff00;\">sfads</span></td> <td style=\"width: 123px;\"><span style=\"background-color: #ffff00;\">asf</span></td> <td style=\"width: 123px;\"><span style=\"background-color: #ffff00;\">asf</span></td> <td style=\"width: 124px;\"><span style=\"background-color: #ffff00;\">asfsf</span></td> </tr> <tr> <td style=\"width: 123px;\"><span style=\"background-color: #ffff00;\">gdasf&nbsp;fsf</span></td> <td style=\"width: 123px;\"><span style=\"background-color: #ffff00;\">sfa&nbsp;California kd</span></td> <td style=\"width: 123px;\"><span style=\"background-color: #ffff00;\">1.2.3</span></td> <td style=\"width: 124px;\"><span style=\"background-color: #ffff00;\">sf</span></td> </tr> <tr> <td style=\"width: 123px;\"><span style=\"background-color: #ffff00;\">4d44 3d22</span></td> <td style=\"width: 123px;\"><span style=\"background-color: #ffff00;\">svf3</span></td> <td style=\"width: 123px;\"><span style=\"background-color: #ffff00;\">wf23</span></td> <td style=\"width: 124px;\"><span style=\"background-color: #ffff00;\">&nbsp;</span></td> </tr> <tr> <td style=\"width: 123px;\"><span style=\"background-color: #ffff00;\">fw&nbsp;</span></td> <td style=\"width: 123px;\"><span style=\"background-color: #ffff00;\">sas</span></td> <td style=\"width: 123px;\"><span style=\"background-color: #ffff00;\">&nbsp;</span></td> <td style=\"width: 124px;\"><span style=\"background-color: #ffff00;\">af</span></td> </tr> <tr> <td style=\"width: 123px;\"><span style=\"background-color: #ffff00;\">wf d</span></td> <td style=\"width: 123px;\"><span style=\"background-color: #ffff00;\">2r</span></td> <td style=\"width: 123px;\"><span style=\"background-color: #ffff00;\">&nbsp;</span></td> <td style=\"width: 124px;\"><span style=\"background-color: #ffff00;\">&nbsp;</span></td> </tr> <tr> <td style=\"width: 123px;\"><span style=\"background-color: #ffff00;\">&nbsp;</span></td> <td style=\"width: 123px;\"><span style=\"background-color: #ffff00;\">&nbsp;</span></td> <td style=\"width: 123px;\"><span style=\"background-color: #ffff00;\">asfd</span></td> <td style=\"width: 124px;\"><span style=\"background-color: #ffff00;\">&nbsp;</span></td> </tr> </tbody> </table> <p><span style=\"background-color: #ffff00;\">Tewst isite askddjfol kjluowlkd</span></p> </body></html>";

    initializeEditor(value: string) {
        tinymce.init({
            selector: '#' + this.elementId,
            plugins: ['link', 'table', 'advlist', 'lists', 'autoresize', 'textcolor', 'colorpicker', 'fullscreen', 'textpattern', 'fullpage'],
            toolbar: ['undo redo | bold italic | alignleft aligncenter alignright alignjustify | forecolor backcolor | lists numlist bullist  outdent indent | table | link | removeformat | fullscreen'],
            formats: {
                custom_format: { styles: { backgroundColor: '#FFFF00' } }
            },
            menubar: false,
            skin_url: 'assets/skins/lightgray',
            setup: editor => {
                this.editor = editor;
                editor.on('KeyPress', () => {
                    const content = editor.getContent();
                    this.onEditorContentChange.emit(content);
                });
                editor.on('paste', () => {
                    const content = editor.getContent();
                    this.onEditorContentChange.emit(content);
                });
                editor.on('init', () => {
                    tinymce.get('my-editor').setContent(value);
                    tinymce.get('my-editor').formatter.register('custom_format', { inline: 'span', styles: { backgroundColor: '#FFFF00' } })
                    tinymce.get('my-editor').formatter.apply('custom_format')
                    tinymce.execCommand('mceRepaint');
                });
            }
        });
    }

    setContentForEditor(value: string): void {
        tinymce.get('my-editor').setContent(value);
    }

    setCustomFormat(): void {
        tinymce.activeEditor.formatter.apply('custom_format');
    }

    ngOnDestroy() {
        tinymce.remove(this.editor);
    }
}
