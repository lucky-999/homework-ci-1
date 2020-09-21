export default function health(obj) {
    if (obj.health > 50) {
        return 'healthy';
    } else if (obj.health <= 50 && obj.health >= 15) {
        return 'wounded';
    } else if (obj.health < 15) {
        return 'critical';
    }
}