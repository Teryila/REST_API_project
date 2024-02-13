@Service
public class HouseService {
    @Autowired
    private HouseRepository houseRepository;

    public House saveHouse(House house) {
        return houseRepository.save(house);
    }

    public House getHouseById(Long id) {
        return houseRepository.findById(id).orElse(null);
    }

    public List<House> getAllHouses() {
        return houseRepository.findAll();
    }

    public void deleteHouseById(Long id) {
        houseRepository.deleteById(id);
    }
}
