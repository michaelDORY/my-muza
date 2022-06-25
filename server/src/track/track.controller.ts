import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
  Query,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ObjectId } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreateTrackDto } from './dto/create-track.dto';
import { TrackService } from './track.service';

@Controller('/tracks')
export class TrackController {
  constructor(private trackService: TrackService) {}
  @Get()
  getAll(@Query() limit: number, @Query() startAt: number) {
    return this.trackService.getAll(limit, startAt);
  }

  @Post('/add')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'picture', maxCount: 1 },
      { name: 'audio', maxCount: 1 },
    ]),
  )
  add(@UploadedFiles() files, @Body() dto: CreateTrackDto) {
    const { picture, audio } = files;
    return this.trackService.create(dto, audio[0], picture[0]);
  }

  @Get(':id')
  getOneById(@Param('id') id: ObjectId) {
    return this.trackService.findById(id);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.trackService.delete(id);
  }

  @Post('/comment')
  addComment(@Body() dto: CreateCommentDto) {
    return this.trackService.addComment(dto);
  }

  @Post('listen/:id')
  listen(@Param('id') id: ObjectId) {
    return this.trackService.listen(id);
  }

  @Get('search')
  search(@Query('query') query: string) {
    return this.trackService.search(query);
  }
}
