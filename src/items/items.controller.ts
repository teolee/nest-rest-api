import {Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import {CreateItemDto} from "./dto/create-item.dto";
import {ItemsService} from "./items.service";
import {Item} from "./interfaces/item.interface";

@Controller('items')
export class ItemsController {

  constructor(private readonly itemService: ItemsService) {
    console.log(itemService);
  }

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Item> {
    return this.itemService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemService.create(createItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Item> {
    return this.itemService.delete(id)
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id: string): Promise<Item> {
    return this.itemService.update(id, updateItemDto);
  }
}
