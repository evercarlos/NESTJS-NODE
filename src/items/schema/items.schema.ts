import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemsDocument = Items & Document;

@Schema()
export class Items {
  //@Prop({unique:true})
  @Prop() // que el name va ser una propiedad
  name: string;

  @Prop()// propiedad
  age: number;

  @Prop()
  breed: string;
}

export const ItemsSchema = SchemaFactory.createForClass(Items);