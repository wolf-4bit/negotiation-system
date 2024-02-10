import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm"
import {IsEmail} from "class-validator"
import {nanoid} from "nanoid"
import { hash } from "bcrypt"
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    fullname: string

    @Column()
    @IsEmail({}, { message: 'Invalid email format' })
    email: string

    @Column()
    password: string

    @BeforeInsert()
    
    generateId(){
        this.id = nanoid()    
    }
    generateSalt(){ 
        this.password = hash(this.password, 10)
    }

}
