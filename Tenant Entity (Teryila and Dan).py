@Entity
public class Tenant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tenantId;
    private String name;
    private String email;
    private String phoneNumber;

    // Constructors, getters, and setters
}
