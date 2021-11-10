import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ele-button',
  styleUrl: 'ele-button.css',
  shadow: true,
})
export class EleButton {

  @Prop() theme: string;
  @Prop({ attribute: 'btn-name' }) btnName: string;

  render() {
    return (
       <button class={this.theme}>
         {this.btnName}
       </button>
    );
  }

}
