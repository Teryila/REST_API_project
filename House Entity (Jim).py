@Entity
public class House {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long houseId;
    private String address;
    private int numberOfRooms;
    private boolean occupied;

    // Constructors, getters, and setters
}
