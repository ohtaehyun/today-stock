import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { FEAR_GREED_RATING } from "../constant/fear-greed-rating";

@Entity({ name: 'fear_greed' })
export class FearGreedEntity {
  @PrimaryGeneratedColumn({ name: 'fear_greed_id' })
  fearGreedId: number;

  @Column({ name: 'fear_greed_timestamp' })
  fearGreedTimestamp: Date;

  @Column()
  rating: FEAR_GREED_RATING;

  @Column()
  score: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}