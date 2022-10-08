import { MongooseModule} from '@nestjs/mongoose'
import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { Items, ItemsSchema } from './schema/items.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Items.name, // class Items
        schema: ItemsSchema,
      },
    ])
  ],
  controllers: [ItemsController],
  providers: [ItemsService]
})
export class ItemsModule {}
