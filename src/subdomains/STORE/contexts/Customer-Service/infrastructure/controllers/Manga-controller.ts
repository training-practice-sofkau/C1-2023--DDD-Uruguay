


import { Controller, Post, Body, Get, Put } from '@nestjs/common';
import {  GetMangaCaseUse, UpdateMangaStockCaseUse } from '../../application';
import {  IGetManga } from '../../domain/interfaces/commands';
import {
    IMangaModifiedEventPublisher,
  IMangaObtainedEventPublisher,
} from '../messaging/publisher/order';
import {  MangaService } from '../persitence';
import { IUpdateMangaStockCommand } from '../utils/commands/order/IUpdateMangaStock';

@Controller('order')
export class OrderController {
  constructor(
    private readonly mangaService: MangaService,
    private readonly getMangaEventPublisher: IMangaObtainedEventPublisher,
    private readonly ModifiedMangaStockingEventPublisher: IMangaModifiedEventPublisher
  ) {}



  @Get('GetManga')
  getManga(@Body() command: IGetManga) {
    const useCase = new  GetMangaCaseUse (this.mangaService,  this.getMangaEventPublisher)
    return useCase.execute(command)
    
  }

  

  @Put('UpdateMangaStock')
  updateMangaStock(@Body() command: IUpdateMangaStockCommand) {
    const useCase = new  UpdateMangaStockCaseUse (this.mangaService,  this.ModifiedMangaStockingEventPublisher)
    return useCase.execute(command)
    
  }



  @Put('UpdateMangaName')
  updateMangaName(@Body() command: IUpdateMangaStockCommand) {
    const useCase = new  UpdateMangaStockCaseUse (this.mangaService,  this.ModifiedMangaStockingEventPublisher)
    return useCase.execute(command)
    
  }
  
  @Put('UpdateMangaPrice')
  updateMangaPrice(@Body() command: IUpdateMangaStockCommand) {
    const useCase = new  UpdateMangaStockCaseUse (this.mangaService,  this.ModifiedMangaStockingEventPublisher)
    return useCase.execute(command)
    
  }
  
  @Put('UpdateMangaStock')
  updateMangaState(@Body() command: IUpdateMangaStockCommand) {
    const useCase = new  UpdateMangaStockCaseUse (this.mangaService,  this.ModifiedMangaStockingEventPublisher)
    return useCase.execute(command)
    
  }

}




