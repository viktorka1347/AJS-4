  
export default function getHealt(hero) {
    if (hero.health > 50) {
      return 'healthy';
    }
    if (hero.health < 15) {
      return 'critical';
    }
    return 'wounded';
  }