@RestController
@RequestMapping("/houses")
public class HouseController {
    @Autowired
    private HouseService houseService;

    // Endpoint for creating a new house
    @PostMapping("/")
    public House createHouse(@RequestBody House house) {
        return houseService.saveHouse(house);
    }

    // Endpoint for retrieving a house by ID
    @GetMapping("/{id}")
    public House getHouseById(@PathVariable Long id) {
        return houseService.getHouseById(id);
    }

    // Endpoint for retrieving all houses
    @GetMapping("/")
    public List<House> getAllHouses() {
        return houseService.getAllHouses();
    }

    // Endpoint for updating a house
    @PutMapping("/{id}")
    public House updateHouse(@PathVariable Long id, @RequestBody House house) {
        house.setHouseId(id);
        return houseService.saveHouse(house);
    }

    // Endpoint for deleting a house
    @DeleteMapping("/{id}")
    public void deleteHouse(@PathVariable Long id) {
        houseService.deleteHouseById(id);
    }
}
