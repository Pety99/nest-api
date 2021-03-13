import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { create } from 'node:domain';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['choclate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }
  findOne(id: string) {
    const coffee = this.coffees.find((i) => i.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffe #${id} not fonud`);
    }
    return coffee;
  }
  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffe = this.findOne(id);
    if (existingCoffe) {
      //Update
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((i) => i.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
