import {Component, ElementRef, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {Game} from "../../models/Game";
import {ModalComponent} from "../modal/modal.component";
import {Subject} from "rxjs";
import {animate, style, transition, trigger} from "@angular/animations";
import {MeetingImagePreview, MeetingImagePreviewAdapter} from "../meeting-preview-image/MeetingImagePreviewAdapter";

@Component({
  selector: 'app-meeting-search-new',
  templateUrl: './meeting-search-new.component.html',
  styleUrls: ['./meeting-search-new.component.scss'],
})
export class MeetingSearchNewComponent implements OnInit {

  @ViewChild('modalComponent')
  modalComponent!: ModalComponent
  $selectedImage: Subject<Game[]> = new Subject<Game[]>();
  selectedGames: Game[] = [];
  meetingImagePreview: MeetingImagePreview[] = [];

  searchedGames: Game[] = [
    new Game({
      title: "Катан",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae dolor dolorem ea expedita illo in labore libero minima minus nobis quas quasi quis quo, repellat sed, sit temporibus voluptates!',
      playerMinimum: 2,
      playerMaximum: 4,
      duration: 50, // in minutes
      rating: 4.5,
      imageUrl: 'https://f.allegroimg.com/s720/063b7d/cca14bc64d7cbfac7aa6694b3e2f/CATAN-OSADNICY-Z-CATANU-GRA-PLANSZOWA-GALAKTA',
    }),
    new Game({
      title: "Ярость Дракулы",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae dolor dolorem ea expedita illo in labore libero minima minus nobis quas quasi quis quo, repellat sed, sit temporibus voluptates!',
      playerMinimum: 2,
      playerMaximum: 5,
      duration: 80, // in minutes
      rating: 4.8,
      imageUrl: 'https://images.inteltoys.ru/600x600/products/2021/02/35859_61c089aca8fa7.jpg',
    }),
    new Game({
      title: "Мачи Коро",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae dolor dolorem ea expedita illo in labore libero minima minus nobis quas quasi quis quo, repellat sed, sit temporibus voluptates!',
      playerMinimum: 2,
      playerMaximum: 5,
      duration: 20, // in minutes
      rating: 4.5,
      imageUrl: 'https://cf.geekdo-images.com/original/img/d9k8b5stSast1I9MdRoU1H_bvwU=/0x0/pic2034049.jpg',
    }),
    new Game({
      title: "Fallout Board Game",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae dolor dolorem ea expedita illo in labore libero minima minus nobis quas quasi quis quo, repellat sed, sit temporibus voluptates!',
      playerMinimum: 1,
      playerMaximum: 4,
      duration: 70, // in minutes
      rating: 4.1,
      imageUrl: 'https://www.fembotwiki.com/images/7/70/Fallout_4_cover_art.jpg',
    }),
    new Game({
      title: "битва за Рокуган",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae dolor dolorem ea expedita illo in labore libero minima minus nobis quas quasi quis quo, repellat sed, sit temporibus voluptates!',
      playerMinimum: 2,
      playerMaximum: 10,
      duration: 50, // in minutes
      rating: 4.5,
      imageUrl: 'http://pm1.narvii.com/7129/d10fac8c79de8bcffa96888f33cf988cfc5f6286r1-642-640v2_uhq.jpg',
    })
  ];


  constructor() { }

  ngOnInit(): void {
    this.meetingImagePreview = new MeetingImagePreviewAdapter(this.selectedGames).adaptToPreview(
      200, 20,
      70, 20,
      1, 0.18,
      3)

  }

  toAddGames(){
    this.modalComponent.onTik.emit();
  }

  enterSearchedGames(game: Game){
    this.selectedGames.push(game);
    this.meetingImagePreview = new MeetingImagePreviewAdapter(this.selectedGames).adaptToPreview(
      200, 20,
      70, 20,
      1, 0.18,
      3)

    this.modalComponent.close();
  }

}
